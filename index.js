class SuperMath {
    get x() {
        return this._x;
    }
    set x(a) {
        this._x = a;
    }

    get y() {
        return this._y;
    }

    set y(a) {
        this._y = a;
    }

    get znak() {
        return this._znak;
    }

    set znak(a) {
        this._znak = a;
    }

    plus() {
        alert(`Результат: ${this.x + this.y}`);
    };

    minus() {
        alert(`Результат: ${this.x + this.y}`);
    };

    divide() {
        alert(`Результат: ${this.x / this.y}`);
    };

    multiply() {
        alert(`Результат: ${this.x * this.y}`);
    };

    remainder() {
        alert(`Результат: ${this.x % this.y}`);
    };

    check(obj) {
        if (!obj) return;
        const result = confirm(`Вибажаєте виконати операцію ${obj.x} ${obj.znak} ${obj.y} ?`);
        if (!result) {
            this.x = null;
            this.y = null;
            this.znak = null;
            this.input();
        };

        switch (this.znak) {
            case '+': this.plus(); break;
            case '-': this.minus(); break;
            case '/': this.divide(); break;
            case '*': this.multiply(); break;
            case '%': this.remainder(); break;
        };
    };

    input() {
        let x = null;
        x = prompt('Введіть перше числодля проведення математичної дії');
        if (!x) return;
        while (isNaN(x)) {
            x = prompt('Вводити можна лише число');
        };
        this.x = x;

        let y = null;
        y = prompt('Введіть друге числодля проведення математичної дії');
        if (!y) return;
        while (isNaN(y)) {
            y = prompt('Вводити можна лише число');
        };
        this.y = y;

        let znak = null;
        const operations = ['+', '-', '/', '*', '%'];
        znak = prompt('Яку дію потрібно виконати ? Оберіть одну з наступних дій: + , - , / , * , % ');
        if (!znak) return;
        while (!operations.includes(znak)) {
            znak = prompt('Оберіть одну з наступних дій: + , - , / , * , % ');
        };
        this.znak = znak;

        if (this.x && this.y && this.znak) {
            this.check({ x: this.x, y: this.y, znak: this.znak });
        };
    };
};

const math = new SuperMath();

math.input();