export interface MenuItem {
  title: string;
  path?: string; // The unique URL path for the page
  children?: MenuItem[];
  defaultExpanded?: boolean; // To have some sections open by default
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

declare global {
  interface Window {
    marked: {
      parse(markdown: string): string;
    };
  }
}