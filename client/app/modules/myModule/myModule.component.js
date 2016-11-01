const myModuleComponent = {
    template: `<h1 ng-click="$ctrl.clickHandler()">
        {{$ctrl.hello}}
        <a ui-sref="home">home</a>
    </h1>`,
    controller: myModuleCtrl
};

function myModuleCtrl($rootScope) {
    this.hello = $rootScope.hello;

    this.clickHandler = () => {
        console.log('Clicked!')
    }
}

export default myModuleComponent;
