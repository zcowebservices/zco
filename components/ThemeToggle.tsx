'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    // Initialize from DOM/localStorage on first render (client only)
    const [isLight, setIsLight] = useState<boolean>(() => {
        if (typeof document === 'undefined') return false;           // SSR guard
        const saved = typeof localStorage !== 'undefined'
        ? localStorage.getItem('theme')
        : null;
        if (saved === 'light') return true;
        return document.documentElement.classList.contains('light');
    });

    function apply(mode: 'light' | 'dark') {
        const root = document.documentElement;
        root.classList.toggle('light', mode === 'light');
        localStorage.setItem('theme', mode);
        setIsLight(mode === 'light');
    }

    function toggleTheme() { 
        apply(isLight ? 'dark' : 'light');
    }

    // Optional: keep in sync across tabs/windows (setState happens in an event, not in effect body)
    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
        if (e.key === 'theme') {
            const mode = e.newValue === 'light' ? 'light' : 'dark';
            document.documentElement.classList.toggle('light', mode === 'light');
            setIsLight(mode === 'light');
        }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    return (
        <button
        type="button"
        onClick={toggleTheme}
        aria-pressed={isLight}
        title={isLight ? 'Switch to dark' : 'Switch to light'}
        className="
            inline-flex items-center cursor-pointer gap-2 rounded-xl px-3 py-2
            bg-[var(--foreground)]/10 text-[var(--foreground)]
            hover:opacity-90 transition
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]
        "
        >
        <span className="text-sm font-medium">{isLight ? 'Light' : 'Dark'}</span>
        <span aria-hidden="true">{isLight ?  <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}</span>
        </button>
    );
}
