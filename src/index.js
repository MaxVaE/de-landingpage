import { render, RenderPosition } from './utils/render';
import HeaderView from './view/HeaderView/HeaderView';
import HeroBlockView from './view/HeroBlockView/HeroBlockView';

const body = document.querySelector('.body');
const main = document.querySelector('.main');

const Header = new HeaderView();
render(body, Header, RenderPosition.AFTERBEGIN);

const HeroBlock = new HeroBlockView();
render(main, HeroBlock, RenderPosition.BEFOREEND);
HeroBlock.renderButton();
