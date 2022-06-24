import chalk from 'chalk';
import dedent from 'dedent-js';


const printError = (error) => {
    console.log(chalk.bgRed(" ERROR "), error);
};

const printSuccess = (message) => {
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

const printWeather = ({name, main, wind, clouds, weather}) => {
    console.log(
        `${chalk.bgCyan(name)}
        Описание - ${chalk.bgCyan(weather[0].description)}
        Облачность - ${chalk.bgCyan(clouds.all)} 
        Температура - ${chalk.bgCyan(main.temp)} 
    Ветер:
        Скорость - ${chalk.bgCyan(wind.speed)}`
    );
};

export { printError, printSuccess, printHelp, printWeather };