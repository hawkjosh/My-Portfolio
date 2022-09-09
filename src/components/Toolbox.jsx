import Apollo from '../assets/img/toolbox/apollo.png';
import Babel from '../assets/img/toolbox/babel.png';
import Bootstrap from '../assets/img/toolbox/bootstrap.png';
import CSS3_icon from '../assets/img/toolbox/css3.png';
import ESLint from '../assets/img/toolbox/eslint.png';
import Git from '../assets/img/toolbox/git.png';
import GitHub from '../assets/img/toolbox/github.png';
import GitLab from '../assets/img/toolbox/gitlab.png';
import GraphQL from '../assets/img/toolbox/graphql.png';
import Handlebars from '../assets/img/toolbox/handlebars.png';
import Heroku from '../assets/img/toolbox/heroku.png';
import HTML5_icon from '../assets/img/toolbox/html5.png';
import JavaScript from '../assets/img/toolbox/javascript.png';
import Jest from '../assets/img/toolbox/jest.png';
import JQuery from '../assets/img/toolbox/jquery.png';
import JSON_icon from '../assets/img/toolbox/json.png';
import MomentJS from '../assets/img/toolbox/momentjs.png';
import MongoDB from '../assets/img/toolbox/mongodb.png';
import MySQL from '../assets/img/toolbox/mysql.png';
import NodeJS from '../assets/img/toolbox/nodejs.png';
import Nodemon from '../assets/img/toolbox/nodemon.png';
import NPM_icon from '../assets/img/toolbox/npm.png';
import ReactJS from '../assets/img/toolbox/react.png';
import Redux from '../assets/img/toolbox/redux.png';
import Sequelize from '../assets/img/toolbox/sequelize.png';
import Slack from '../assets/img/toolbox/slack.png';
import VSCode from '../assets/img/toolbox/vscode.png';
// import WebPack from '../assets/img/toolbox/webpack.png';
import Stack from 'react-bootstrap/Stack'


const icon = { width: '2rem', margin: "10px 10px"};

export default function Toolbox() {
  return (
    <section className="d-flex flex-column mx-0">
        <div className="text-center mb-3">
          <h2>My Toolbox</h2>
        </div>

          <Stack className="flex-wrap justify-content-evenly mx-0" direction="horizontal" gap={2}>
            <img src={Apollo} alt="Apollo" style={icon} />
            <img src={Babel} alt="Babel" style={icon} />
            <img src={Bootstrap} alt="Bootstrap" style={icon} />
            <img src={CSS3_icon} alt="CSS3" style={icon} />
            <img src={ESLint} alt="ESLint" style={icon} />
            <img src={Git} alt="Git" style={icon} />
            <img src={GitHub} alt="GitHub" style={icon} />
            <img src={GitLab} alt="GitLab" style={icon} />
            <img src={GraphQL} alt="GraphQL" style={icon} />
            <img src={Handlebars} alt="Handlebars" style={icon} />
            <img src={Heroku} alt="Heroku" style={icon} />
            <img src={HTML5_icon} alt="HTML5" style={icon} />
            <img src={JavaScript} alt="JavaScript" style={icon} />
            <img src={Jest} alt="Jest" style={icon} />
            <img src={JQuery} alt="JQuery" style={icon} />
            <img src={JSON_icon} alt="JSON" style={icon} />
            <img src={MomentJS} alt="MomentJS" style={icon} />
            <img src={MongoDB} alt="MongoDB" style={icon} />
            <img src={MySQL} alt="MySQL" style={icon} />
            <img src={NodeJS} alt="NodeJS" style={icon} />
            <img src={Nodemon} alt="Nodemon" style={icon} />
            <img src={NPM_icon} alt="NPM" style={icon} />
            <img src={ReactJS} alt="ReactJS" style={icon} />
            <img src={Redux} alt="Redux" style={icon} />
            <img src={Sequelize} alt="Sequelize" style={icon} />
            <img src={Slack} alt="Slack" style={icon} />
            <img src={VSCode} alt="VSCode" style={icon} />
            {/* <img src={WebPack} alt="WebPack" style={icon} /> */}
          </Stack>
    </section>
  )
};