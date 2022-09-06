import Apollo from '../assets/img/toolbox/apollo.png';
import Babel from '../assets/img/toolbox/babel.png';
import Bootstrap from '../assets/img/toolbox/bootstrap.png';
import CSS3 from '../assets/img/toolbox/css3.png';
import ESLint from '../assets/img/toolbox/eslint.png';
import Git from '../assets/img/toolbox/git.png';
import GitHub from '../assets/img/toolbox/github.png';
import GitLab from '../assets/img/toolbox/gitlab.png';
import GraphQL from '../assets/img/toolbox/graphql.png';
import Handlebars from '../assets/img/toolbox/handlebars.png';
import Heroku from '../assets/img/toolbox/heroku.png';
import HTML5 from '../assets/img/toolbox/html5.png';
import JavaScript from '../assets/img/toolbox/javascript.png';
import Jest from '../assets/img/toolbox/jest.png';
import JQuery from '../assets/img/toolbox/jquery.png';
import JSON from '../assets/img/toolbox/json.png';
import MomentJS from '../assets/img/toolbox/momentjs.png';
import MongoDB from '../assets/img/toolbox/mongodb.png';
import MySQL from '../assets/img/toolbox/mysql.png';
import NodeJS from '../assets/img/toolbox/nodejs.png';
import Nodemon from '../assets/img/toolbox/nodemon.png';
import NPM from '../assets/img/toolbox/npm.png';
import ReactJS from '../assets/img/toolbox/react.png';
import Redux from '../assets/img/toolbox/redux.png';
import Sequelize from '../assets/img/toolbox/sequelize.png';
import Slack from '../assets/img/toolbox/slack.png';
import VSCode from '../assets/img/toolbox/vscode.png';
import WebPack from '../assets/img/toolbox/webpack.png';
import Stack from 'react-bootstrap/Stack'


// const icon = { width: '2rem', margin: "15px 20px"};

export default function Toolbox() {
  return (
    <section className="" id="toolbox">
        <div className="">
          <h2>My Toolbox</h2>
        </div>

          {/* <Stack className="container flex-wrap justify-content-center mx-0" direction="horizontal" gap={3}> */}
          <Stack>
            <img src={Apollo} alt="Apollo" />
            <img src={Babel} alt="Babel" />
            <img src={Bootstrap} alt="Bootstrap" />
            <img src={CSS3} alt="CSS3" />
            <img src={ESLint} alt="ESLint" />
            <img src={Git} alt="Git" />
            <img src={GitHub} alt="GitHub" />
            <img src={GitLab} alt="GitLab" />
            <img src={GraphQL} alt="GraphQL" />
            <img src={Handlebars} alt="Handlebars" />
            <img src={Heroku} alt="Heroku" />
            <img src={HTML5} alt="HTML5" />
            <img src={JavaScript} alt="JavaScript" />
            <img src={Jest} alt="Jest" />
            <img src={JQuery} alt="JQuery" />
            <img src={JSON} alt="JSON" />
            <img src={MomentJS} alt="MomentJS" />
            <img src={MongoDB} alt="MongoDB" />
            <img src={MySQL} alt="MySQL" />
            <img src={NodeJS} alt="NodeJS" />
            <img src={Nodemon} alt="Nodemon" />
            <img src={NPM} alt="NPM" />
            <img src={ReactJS} alt="ReactJS" />
            <img src={Redux} alt="Redux" />
            <img src={Sequelize} alt="Sequelize" />
            <img src={Slack} alt="Slack" />
            <img src={VSCode} alt="VSCode" />
            <img src={WebPack} alt="WebPack" />
          </Stack>
    </section>
  )
};