var salario = 6000.00

salario>=5000.00 ? salario=(salario+(salario*0.05)) : salario=(salario+(salario*0.1));

console.log(`1 - R$ ${salario}`);

salario>=5000.00 ? salario+=salario*0.05 : salario+=salario*0.1
console.log(`2 - R$ ${salario}`);
