import { Component, ElementRef, Signal, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, fromEvent } from 'rxjs';
import { counterSelector } from '../../store/counter.selectors';
import { increaseCounterAction } from '../../store/actions/increaseCounter.action';
import { resetCounterAction } from '../../store/actions/resetCounter.action';
import { degreaseCounterAction } from '../../store/actions/degreaseCounter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @ViewChild('increaseButton', { static: true }) increaseButtonRef!: ElementRef;
  @ViewChild('degreaseButton', { static: true }) degreaseButtonRef!: ElementRef;
  @ViewChild('resetButton', { static: true }) resetButtonRef!: ElementRef;

  increaseButtonSubscription!: Subscription;
  degreaseButtonSubscription!: Subscription;
  resetButtonSubscription!: Subscription;

  private readonly store = inject(Store);
  readonly counterValue: Signal<number> = this.store.selectSignal(counterSelector);

  ngAfterViewInit(): void {
    this.listenIncreaseButtonClickEvent();
    this.listenDegreaseButtonClickEvent();
    this.listenResetButtonClickEvent();
  }

  ngOnDestroy(): void {
    this.resetButtonSubscription.unsubscribe();
    this.increaseButtonSubscription.unsubscribe();
    this.degreaseButtonSubscription.unsubscribe();
  }

  listenIncreaseButtonClickEvent(): void {
    this.increaseButtonSubscription = fromEvent(this.increaseButtonRef.nativeElement, 'click')
      .subscribe({
        next: () => {
          this.store.dispatch(increaseCounterAction())
        }
      });
  }


  listenDegreaseButtonClickEvent(): void {
    this.degreaseButtonSubscription = fromEvent(this.degreaseButtonRef.nativeElement, 'click')
      .subscribe({
        next: () => {
          this.store.dispatch(degreaseCounterAction())
        }
      });
  }

  listenResetButtonClickEvent(): void {
    this.resetButtonSubscription = fromEvent(this.resetButtonRef.nativeElement, 'click')
      .subscribe({
        next: () => {
          this.store.dispatch(resetCounterAction())
        }
      });
  }
}
