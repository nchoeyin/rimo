import { Injectable, Inject, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('dark');
  private renderer: Renderer2;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    
    // Only access localStorage and document in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize theme from localStorage or default to dark
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        this.setTheme(savedTheme, false); // Don't save to localStorage during init
      } else {
        this.setTheme('dark', false); // Don't save to localStorage during init
      }
    } else {
      // Server-side: default to dark theme
      this.setTheme('dark', false);
    }
  }

  init(): void {
    // Already initialized in constructor
  }

  getTheme() {
    return this.currentTheme.asObservable();
  }

  getCurrentTheme(): Theme {
    return this.currentTheme.value;
  }

  setTheme(theme: Theme, saveToStorage: boolean = true) {
    // Update the observable immediately
    this.currentTheme.next(theme);
    
    // Only access localStorage and document in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Save to localStorage if requested
      if (saveToStorage) {
        localStorage.setItem('theme', theme);
      }
      
      // Apply theme to document using Renderer2
      const root = document.documentElement;
      
      // Remove all existing theme attributes and classes first
      this.renderer.removeAttribute(root, 'data-theme');
      this.renderer.removeClass(root, 'dark');
      this.renderer.removeClass(root, 'light');
      
      // Set the new theme
      this.renderer.setAttribute(root, 'data-theme', theme);
      
      // Also set class for additional compatibility
      if (theme === 'dark') {
        this.renderer.addClass(root, 'dark');
      } else {
        this.renderer.addClass(root, 'light');
      }
      
      // Force a reflow to ensure immediate visual update
      root.offsetHeight;
      
      console.log('Theme set to:', theme, 'data-theme:', root.getAttribute('data-theme'));
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
