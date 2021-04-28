type Callback = (...args: number[]) => void;

export class EventBus {
  private static __instance: EventBus;

  private listeners: Record<string, unknown> = {};

  constructor() {
    if (EventBus.__instance) {
      return EventBus.__instance;
    }
    EventBus.__instance = this;
  }

  on(event: string, callback: Callback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    (<Callback[]> this.listeners[event]).push(callback);
  }

  off(event: string, callback: Callback): void {
    if (!this.listeners[event]) {
      console.log(`Нет события: ${event}`);
    }

    this.listeners[event] = (<Callback[]> this.listeners[event]).filter(
      (listener) => listener !== callback,
    );
  }

  offAll(): void {
    this.listeners = {};
  }

  emit(event: string, ...args: number[]): void {
    if (!this.listeners[event]) {
      console.log(`Нет события: ${event}`);
    }

    (<Callback[]> this.listeners[event]).forEach((listener) => {
      listener(...args);
    });
  }
}
