import { render, RenderPosition } from './utils/render';
import CardsView from './view/CardsView/CardsView';
import HeaderView from './view/HeaderView/HeaderView';
import HeroBlockView from './view/HeroBlockView/HeroBlockView';
import BelovedClientView from './view/BelovedClientView/BelovedClientView';

const cards = [
  {
    src: './images/cards/card-1.svg',
    title: 'Bring Technology To Your Comfrotable Home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    className: 'cards-view__image',
  },
  {
    src: './images/cards/card-2.svg',
    title: 'Make Your business To Be Better Famous In Internet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    src: './images/cards/card-3.svg',
    title: 'Build Your Digital Product That Suitable For Your Need',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const body = document.querySelector('.body');
const main = document.querySelector('.main');

const Header = new HeaderView();
render(body, Header, RenderPosition.AFTERBEGIN);

const HeroBlock = new HeroBlockView();
render(main, HeroBlock, RenderPosition.BEFOREEND);
HeroBlock.renderButton();

const Cards = new CardsView(cards);
render(main, Cards, RenderPosition.BEFOREEND);
Cards.renderCards();

const BelovedClient = new BelovedClientView();
render(main, BelovedClient, RenderPosition.BEFOREEND);
BelovedClient.renderTable();
