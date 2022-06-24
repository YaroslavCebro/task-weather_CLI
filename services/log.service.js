import chalk from 'chalk';
import dedent from 'dedent-js';


const printError = (error) => {
    console.log(chalk.bgRed(" ERROR "), error);
};

const prinSuccess = (message) => {
    console.log(chalk.bgGreen(" SUCCESS "), message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(" HELP ")} 
        Without params - get weather
        -s [CITY] - config city
        -h - get manual
        -t [API_KEY] - config token`
    );
};

export { printError, prinSuccess, printHelp };