import $ from 'jquery';
import * as sections from '@shopify/theme-sections';
import axios from 'axios';

const stopAll = () => {
  let audios = document.getElementsByTagName('audio');
  for(let i=0; i<audios.length; i++) audios[i].pause();
  $('.music-player__play').addClass('paused');
  $('.music-player__play').removeClass('playing');
}

sections.register('music-player', {
  onLoad: () => {
    $('.music-player__song').on('click', '.paused', (evt) => {
      stopAll();
      let $target = $(evt.currentTarget);
      $target.children('.music-player__audio')[0].play();
      $target.removeClass('paused');
      $target.addClass('playing');
    });
    $('.music-player__song').on('click', '.playing', (evt) => {
      stopAll();
      let $target = $(evt.currentTarget);
      $target.children('.music-player__audio')[0].pause();
      $target.removeClass('playing');
      $target.addClass('paused');
    });
  },
});