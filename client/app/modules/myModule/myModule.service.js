function myModuleService() {
    let sum = 0;

    this.calc = (a, b) => {
        sum = a + b;
    };

    this.getSum = () => sum;
}

export default myModuleService;