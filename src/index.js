import "./styles/main.scss";
import "./styles/loadgame.scss";
import "./styles/responsive.scss"

import { loadGame } from "./scripts/load-game";
import { loadHeader } from "./scripts/load-header";
import { loadBackground } from "./scripts/load-background";

loadHeader();
loadGame();
loadBackground();