import ko from 'knockout'
import tml from './calculator.html'


class ViewModel {
  constructor(){
      this.expr = ko.observable('')
      this.result = ko.computed(() => {

        var result = '...';

        try
        {
          if(this.expr())
          {
            result = eval(this.expr());
          }
        }catch(e){
        }
        return result;
      });
  }
}


ko.components.register('ko-calculator', {
  viewModel: ViewModel,
  template: tml
})
