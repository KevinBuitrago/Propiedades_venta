import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-home-details',
	templateUrl: './home-details.component.html',
	styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
	constructor(private api: ApiService, private activeRouter: ActivatedRoute) { }

	icono: any
	iconoH: any
	iconoB: any
	iconoP: any
	iconoR: any
	dataDetailHome:any = [];

	tooltip: any
	ngOnInit(): void {
		let id = this.activeRouter.snapshot.paramMap.get('id');
		this.api.getDetailHome(id).subscribe((dta: any) => {
			this.dataDetailHome =  dta;
			console.log(this.dataDetailHome);
			
		})
		setTimeout(() => {
			this.icono = document.querySelector<HTMLElement>('#icono');
			this.iconoH = document.querySelector<HTMLElement>('#iconoH');
			this.iconoB = document.querySelector<HTMLElement>('#iconoB');
			this.iconoP = document.querySelector<HTMLElement>('#iconoP');
			this.iconoR = document.querySelector<HTMLElement>('#iconoR');
			this.tooltip = document.querySelector<HTMLElement>('#tooltip');

			this.icono!.addEventListener('mouseenter', () => {
				this.tooltip!.classList.add('activo');
				this.calcularPosicionTooltip("A");
			});

			this.icono!.addEventListener('mouseleave', () => {
					this.tooltip!.classList.remove('activo');
			});
			this.iconoH!.addEventListener('mouseenter', () => {
				this.tooltip!.classList.add('activo');
				this.calcularPosicionTooltip("H");
			});

			this.iconoH!.addEventListener('mouseleave', () => {
					this.tooltip!.classList.remove('activo');
			});

			this.iconoB!.addEventListener('mouseenter', () => {
				this.tooltip!.classList.add('activo');
				this.calcularPosicionTooltip("B");
			});

			this.iconoB!.addEventListener('mouseleave', () => {
					this.tooltip!.classList.remove('activo');
			});

			this.iconoP!.addEventListener('mouseenter', () => {
				this.tooltip!.classList.add('activo');
				this.calcularPosicionTooltip("P");
			});

			this.iconoP!.addEventListener('mouseleave', () => {
					this.tooltip!.classList.remove('activo');
			});

			this.iconoR!.addEventListener('mouseenter', () => {
				this.tooltip!.classList.add('activo');
				this.calcularPosicionTooltip("R");
			});

			this.iconoR!.addEventListener('mouseleave', () => {
					this.tooltip!.classList.remove('activo');

			});
		}, 1);
	}
	calcularPosicionTooltip = (valor: String) => {
		let x = 0;
		let y = 0;
		let r = 0;
		switch (valor) {
			case "A":
				x = this.icono!.offsetLeft;
				y = this.icono!.offsetTop;
				r = 100;
				$('#Titulo').text('Area');
				$('#detail').text(this.dataDetailHome.labelArea);
				break;
			case "H":
				x = this.icono!.offsetLeft;
				y = this.icono!.offsetTop;
				r = 220;
				$('#Titulo').text('Habitaciones');
				$('#detail').text(this.dataDetailHome.labeHabitaci);
				break;
			case "B":
				x = this.icono!.offsetLeft;
				y = this.icono!.offsetTop;
				r = 340;
				$('#Titulo').text('Baños');
				$('#detail').text(this.dataDetailHome.labelBaños);
				break;
			case "P":
				x = this.icono!.offsetLeft;
				y = this.icono!.offsetTop;
				r = 470;
				$('#Titulo').text('Parqueadero');
				$('#detail').text(this.dataDetailHome.labelParqueader);
				break;
			case "R":
				x = this.icono!.offsetLeft;
				y = this.icono!.offsetTop;
				r = 600;
				$('#Titulo').text('Parqueadero');
				$('#detail').text(this.dataDetailHome.labelRopa);
				break;
			default:
				break;
		}


		const anchoTooltip = this.tooltip!.clientWidth - 10;
		const altoTooltip = this.tooltip!.clientHeight - 15;

		const izquierda = x - (anchoTooltip / 2) + r;
		const arriba = y - altoTooltip - 30;

		this.tooltip!.style.left = `${izquierda}px`;
		this.tooltip!.style.top = `${arriba}px`;
	};

}
