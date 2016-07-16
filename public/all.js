'use strict';

Vue.component('zk-ul-comp', {
  props: ['ulData'],
  template: '<ul v-if="ulData" class="nav nav-pills nav-stacked"> <li class="active"> <a style="cursor:default" href="##">{{ulData.title}}</a> </li> <li v-for="row in ulData.contentArr"> <a href={{row.url}} target="_blank"> {{row.title}} <template v-if="row.memo"> <br> {{row.memo}} </template> </a> </li> </ul> <h2 v-else>loading...</h1>'
});

new Vue({
  el: '#app',
  data: {
    project: null,
    resume: null,
    others: null
  },
  ready: function ready() {
    var me;
    console.log('v3');
    me = this;
    $.getJSON('http://115.28.21.133:3000/project', function (data) {
      return me.project = data;
    });
    $.getJSON('http://115.28.21.133:3000/resume', function (data) {
      return me.resume = data;
    });
    return $.getJSON('http://115.28.21.133:3000/others', function (data) {
      return me.others = data;
    });
  }
});