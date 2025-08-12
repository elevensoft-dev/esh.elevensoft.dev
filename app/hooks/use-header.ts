import { useState, useEffect, useCallback } from 'react';

interface UseHeaderReturn {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  activeDropdown: string | null;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setActiveDropdown: (href: string | null) => void;
  headerHeight: number;
}

export function useHeader(): UseHeaderReturn {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(80);

  // Gerenciar scroll com throttling para performance
  useEffect(() => {
    let ticking = false;
    
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollState = window.scrollY > 20;
          if (currentScrollState !== isScrolled) {
            setIsScrolled(currentScrollState);
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeDropdown && !(event.target as Element).closest('[data-dropdown]')) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Fechar menu mobile quando redimensionar para desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Atualizar altura do header
  useEffect(() => {
    function updateHeaderHeight() {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    }

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    // Fechar dropdown quando abrir menu mobile
    if (activeDropdown) {
      setActiveDropdown(null);
    }
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isScrolled,
    isMobileMenuOpen,
    activeDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    setActiveDropdown,
    headerHeight,
  };
} 