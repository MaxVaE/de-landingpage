import { render, RenderPosition } from './utils/render';
import HeaderView from './view/HeaderView/HeaderView';

const body = document.querySelector('.body');

const Header = new HeaderView();
render(body, Header, RenderPosition.AFTERBEGIN);
