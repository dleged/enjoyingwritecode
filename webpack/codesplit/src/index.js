console.log(11);
import('./foo').then(foo => console.log(foo.default.foo()));
import('./bar').then(bar => console.log(bar.default.bar()));
