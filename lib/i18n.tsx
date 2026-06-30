'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

export type Lang = 'en' | 'zh';

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, zh: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = 'momengt-lang';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') {
      setLangState(stored);
      document.documentElement.lang = stored === 'zh' ? 'zh-CN' : 'en';
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const t = useCallback((en: string, zh: string) => (lang === 'zh' ? zh : en), [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
