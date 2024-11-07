import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFloatingSquares]'
})
export class FloatingSquaresDirective implements OnInit {
  private maxSquares = 15;
  private activeSquares = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(1)
  }

  ngOnInit(): void {
    console.log(1)
    this.createFloatingSquaresContainer();
    this.startSquareAnimation();
  }

  private createFloatingSquaresContainer() {
    // Cria um contêiner para os quadrados flutuantes
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'floating-squares-container');
    this.renderer.setStyle(container, 'position', 'absolute');
    this.renderer.setStyle(container, 'top', '0');
    this.renderer.setStyle(container, 'left', '0');
    this.renderer.setStyle(container, 'width', '100%');
    this.renderer.setStyle(container, 'height', '100%');
    this.renderer.setStyle(container, 'overflow', 'hidden');
    this.renderer.setStyle(container, 'z-index', '-1');

    // Define o elemento host como `relative`
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');

    // Adiciona o contêiner ao elemento host
    this.renderer.appendChild(this.el.nativeElement, container);
  }

  private startSquareAnimation() {
    setInterval(() => {
      if (this.activeSquares < this.maxSquares) {
        this.createSquare();
      }
    }, 800); // Intervalo para criar quadrados, ajustado para evitar muitos de uma vez
  }

  private createSquare() {
    const container = this.el.nativeElement.querySelector('.floating-squares-container');
    if (!container) return;

    const square = this.renderer.createElement('div');
    this.renderer.addClass(square, 'square');
    this.setRandomProperties(square);
    this.renderer.appendChild(container, square);

    this.activeSquares++;

    // Remove o quadrado após a animação
    square.addEventListener('animationend', () => {
      this.renderer.removeChild(container, square);
      this.activeSquares--;
    });
  }

  private setRandomProperties(square: HTMLElement) {
    const containerWidth = this.el.nativeElement.offsetWidth;

    // Posição horizontal aleatória
    const randomX = Math.floor(Math.random() * containerWidth);
    square.style.left = `${randomX}px`;

    // Tamanho aleatório entre 30px e 60px
    const randomSize = Math.floor(Math.random() * 31) + 30;
    square.style.width = `${randomSize}px`;
    square.style.height = `${randomSize}px`;

    // Duração e atraso aleatórios
    const randomDuration = Math.random() * 15 + 15;
    square.style.animationDuration = `${randomDuration}s`;

    const randomDelay = Math.random() * 5;
    square.style.animationDelay = `${randomDelay}s`;
  }
}
