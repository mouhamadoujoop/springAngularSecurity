import { Injectable, PLATFORM_ID, Inject, inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService implements OnInit {
  private storage?: Storage;

  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
  
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.storage = localStorage;
     }
  }

  getItem(key: string): string | null {
    return this.storage ? this.storage.getItem(key) : null;
  }

  setItem(key: string, value: string): void {
    if (this.storage) {
      this.storage.setItem(key, value);
    }
  }
}