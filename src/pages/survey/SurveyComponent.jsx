import React, {Component} from "react";

import * as Survey from "survey-react";

import "survey-react/survey.css";
// import "./index.css";
import {withRouter} from "react-router-dom";

Survey.StylesManager.applyTheme("default");

class SurveyComponent extends Component {


    sendDataToServer = async e => {
        let data = [0, 0, 0, 0]

        Object.keys(e.data).forEach(item => {
            let temp = e.data[item].substring(0, 1)
            if (temp === 'a') {
                data[0]++
            } else if (temp === 'b') {
                data[1]++
            } else if (temp === 'c') {
                data[2]++
            } else {
                data[3]++
            }
        })

        data = data.map(item => {
            return String(Math.floor(item / 15 * 100) / 100)
        })
        let search = this.props.location.search
        let paraString = search.substring(search.indexOf("?") + 1, search.length).split("&");
        let classId=String(paraString[0].split("=")[1]);
        data.push(classId);
        const {data: res} = await this.props.surveyFn.surveyAc(data);

        if (res.status === 0) {
            this.props.history.push("/studentTable");
        }


    };

    render() {

        const json = {
            questions: [
                {
                    "type": "radiogroup",
                    "name": "1",
                    "title": "I need to find the way to a shop that a friend has recommended. I would:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. find out where the shop is in relation to somewhere I know",
                        "b. ask my friend to tell me the directions",
                        "c. write down the street directions I need to remember",
                        "d. use a map"]
                },
                {
                    "type": "radiogroup",
                    "name": "2",
                    "title": "A website has a video showing how to make a special graph or chart. There is a person speaking, some lists and words describing what to do and some diagrams. I would learn most from:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. seeing the diagrams",
                        "b. listening",
                        "c. reading the words",
                        "d. watching the actions"]
                },
                {
                    "type": "radiogroup",
                    "name": "3",
                    "title": " I want to find out more about a tour that I am going on. I would:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. look at details about the highlights and activities on the tour",
                        "b. use a map and see where the places are",
                        "c. read about the tour on the itinerary",
                        "d. talk with the person who planned the tour or others who are going on the tour"]
                },
                {
                    "type": "radiogroup",
                    "name": "4",
                    "title": "When choosing a career or area of study, these are important for me:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. Applying my knowledge in real situations",
                        "b. Communicating with others through discussion",
                        "c. Working with designs, maps or charts",
                        "d. Using words well in written communications"]
                },
                {
                    "type": "radiogroup",
                    "name": "5",
                    "title": "When I am learning I:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. like to talk things through",
                        "b. see patterns in things",
                        "c. use examples and applications",
                        "d. read books, articles and handouts"]
                },
                {
                    "type": "radiogroup",
                    "name": "6",
                    "title": "I want to save more money and to decide between a range of options. I would:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. consider examples of each option using my financial information",
                        "b. read a print brochure that describes the options in detail",
                        "c. use graphs showing different options for different time periods",
                        "d. talk with an expert about the options"]
                },
                {
                    "type": "radiogroup",
                    "name": "7",
                    "title": "I want to learn how to play a new board game or card game. I would:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. watch others play the game before joining in",
                        "b. listen to somebody explaining it and ask questions",
                        "c. use the diagrams that explain the various stages, moves and strategies in the game",
                        "d. read the instructions"]
                },
                {
                    "type": "radiogroup",
                    "name": "8",
                    "title": "I have a problem with my heart. I would prefer that the doctor:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. gave me something to read to explain what was wrong",
                        "b. used a plastic model to show me what was wrong",
                        "c. described what was wrong",
                        "d. showed me a diagram of what was wrong"]
                },
                {
                    "type": "radiogroup",
                    "name": "9",
                    "title": "I want to learn to do something new on a computer. I would:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. read the written instructions that came with the program",
                        "b. talk with people who know about the program",
                        "c. start using it and learn by trial and error",
                        "d. follow the diagrams in a book"]
                },
                {
                    "type": "radiogroup",
                    "name": "10",
                    "title": "When learning from the Internet I like:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. videos showing how to do or make things",
                        "b. interesting design and visual features",
                        "c. interesting written descriptions, lists and explanations",
                        "d. audio channels where I can listen to podcasts or interviews"]
                },
                {
                    "type": "radiogroup",
                    "name": "11",
                    "title": "I want to learn about a new project. I would ask for:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. diagrams to show the project stages with charts of benefits and costs",
                        "b. a written report describing the main features of the project",
                        "c. an opportunity to discuss the project",
                        "d. examples where the project has been used successfully"]
                },
                {
                    "type": "radiogroup",
                    "name": "12",
                    "title": "I want to learn how to take better photos. I would:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. ask questions and talk about the camera and its features",
                        "b. use the written instructions about what to do",
                        "c. use diagrams showing the camera and what each part does",
                        "d. use examples of good and poor photos showing how to improve them"]
                },
                {
                    "type": "radiogroup",
                    "name": "13",
                    "title": "I prefer a presenter or a teacher who uses:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. demonstrations, models or practical sessions",
                        "b. question and answer, talk, group discussion, or guest speakers",
                        "c. handouts, books, or readings",
                        "d. diagrams, charts, maps or graphs"]
                },
                {
                    "type": "radiogroup",
                    "name": "14",
                    "title": "I have finished a competition or test and I would like some feedback. I would like to have feedback:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. using examples from what I have done",
                        "b. using a written description of my results",
                        "c. from somebody who talks it through with me",
                        "d. using graphs showing what I achieved"]
                },
                {
                    "type": "radiogroup",
                    "name": "15",
                    "title": "I want to find out about a house or an apartment. Before visiting it I would want:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. to view a video of the property",
                        "b. a discussion with the owner",
                        "c. a printed description of the rooms and features",
                        "d. a plan showing the rooms and a map of the area"]
                },
                {
                    "type": "radiogroup",
                    "name": "16",
                    "title": "I want to assemble a wooden table that came in parts (kitset). I would learn best from:",
                    "isRequired": true,
                    "hasNone": false,
                    "colCount": 1,
                    "choices": ["a. diagrams showing each stage of the assembly",
                        "b. advice from someone who has done it before",
                        "c. written instructions that came with the parts for the table",
                        "d. watching a video of a person assembling a similar table"]
                },

            ]
        };
        // completedHtml Test text that will be displayed after submission
        const survey = new Survey.Model(json);
        return <Survey.Survey model={survey} onComplete={this.sendDataToServer}/>;
    }
}

export default withRouter(SurveyComponent);
