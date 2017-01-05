import { Component , OnInit } from '@angular/core' ;

@Component({
  templateUrl: `
  	<div class="top-bar">
	  	<a routerLink='./tpl' routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">模板</a>
	  	<a routerLink='./compon' routerLinkActive="active" >组件</a>
	  	<a routerLink='./metadata' routerLinkActive="active">元数据</a>
  	</div>
  	<router-outlet></router-outlet>
  	<a class="next" (click)="isVisible = !isVisible" >︾</a>
  	<div class="mix-detail"  [style.display]="isVisible ? 'block' : 'none'">

  		<p>模板、元数据和组件共同描绘出这个视图。</p>
		<a class="next-btn" routerLink="/dataBinding">下一步</a>
  	</div>
  ` ,
  styles:[`
  	.top-bar { 
  		display:flex;
  		justify-content: center;
  		height:3rem;
  		margin:2rem 0;
  		font-size: 1.5rem;
  		border:1px solid #FF5000;
  		border-radius:5px;

  	} 
  	.top-bar a{
  		display: inline-block;
    	width: 33%;
    	text-align:center;
    	line-height:3rem;
    	color:#FFF;
    }
    .top-bar a:nth-child(2n){
  		border-left:1px solid #FF5000;
  		border-right:1px solid #FF5000;
    }
    .top-bar .active{
    	color:yellow;
    }
    .next{
    	width: 50%;
	    display: block;
	    border: 1px solid;
	    border-radius: 5px;
	    text-align: center;
	    line-height: 1.5rem;
	    height: 1.5rem;
	    margin: 1rem auto;
    }
  `]
})

export class MixComponent implements OnInit{
	isVisible : boolean
	constructor(
    ) {}

	ngOnInit(): void {
      this.isVisible = false
    }
}
