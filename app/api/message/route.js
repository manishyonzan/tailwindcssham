import { NextResponse } from "next/server";

const fs = require('fs');
import { join } from "path";

export async function POST(req, res) {


    const filePath = join(process.cwd(), "/app/api/message/value.json");
    const data = fs.readFileSync(filePath , 'utf8');

    const obj = JSON.parse(data);


    let input_layer = 45;  //the value needed to be qual to length of words
    let hidden_layer = 40;
    let output_layer = 5;  //the value need to be equal to classes

    let hiddenlayer_weight_array = obj.hiddenweights;
    let hidden_bias = obj.hidden_bias;
    let output_weights = obj.output_weights;
    let output_bias = obj.outputbias;

    let txt_input = "what are products";
    txt_input = txt_input.split(' ');

    let input_lemattize = [];
    const filePathword = join(process.cwd(), "/app/api/message/word.txt");
    let word_txt = fs.readFileSync(filePathword , 'utf8');

    let word = word_txt.split(',');
    input_lemattize = new Array(word.length).fill(0);
    for (let index = 0; index < txt_input.length; index++) {
        if (word.includes(txt_input[index])) {
            let array_val = word.indexOf(txt_input[index]);
            input_lemattize[array_val] = 1;

        }
    }
    // console.log(input_lemattize);













    let input_x = input_lemattize;

    // let input_x = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1];

    let output_layer_array = [];
    let hidden_input = [];


    const first_layer_node = (input_layer, input_weights, input_x, input_bias) => {
        let element = 0;
        for (let index = 0; index < input_layer; index++) {
            element = element + input_weights[index] * input_x[index];


        }
        element = element + input_bias;
        element = 1 / (1 + 2.71828 ** (-element))
        return element

    }


    const hidden_input_func = () => {
        for (let index = 0; index < hidden_layer; index++) {

            let val = first_layer_node(input_layer, hiddenlayer_weight_array[index], input_x, hidden_bias[index]);
            hidden_input[index] = val;
        }
    }
    hidden_input_func();



    let output_layer_node = [];
    const second_layer_node = (hidden_layer, output_weights, hidden_input, input_bias) => {
        let element = 0;
        for (let index = 0; index < hidden_layer; index++) {
            element = element + output_weights[index] * hidden_input[index];


        }
        element = element + input_bias
        element = 1 / (1 + 2.71828 ** (-element))
        return element

    }

    const output_layer_function = () => {
        for (let index = 0; index < output_layer; index++) {
            let element = second_layer_node(hidden_layer, output_weights[index], hidden_input, output_bias[index]);
            output_layer_array[index] = element;
            // console.log(element);

        }
    }

    output_layer_function();
    // console.log(output_layer_array);

    function maxToOne(array) {
        // find the maximum value in the array
        let maxValue = Math.max(...array);
        // create a new array to store the result
        let result = [];
        // loop through the array
        for (let element of array) {
            // if the element is equal to the maximum, set it to 1
            if (element === maxValue) {
                result.push(1);
            }
            // otherwise, set it to 0
            else {
                result.push(0);
            }
        }
        // return the result
        return result;
    }

    let result = maxToOne(output_layer_array);
    // console.log(result);
    const filePathclass = join(process.cwd(), "/app/api/message/classes.txt");
    let class_txt = fs.readFileSync(filePathclass , 'utf8');

    
    let class_names = class_txt.split(",");
    let class_result;
    for (let index = 0; index < result.length; index++) {
        if (result[index] == 1) {
            class_result = class_names[index];

        }

    }
    console.log(class_result);
    const filePathintent = join(process.cwd(), "/app/api/message/intents.json");
    let intentsdata = fs.readFileSync(filePathintent , 'utf8');


    const intents = JSON.parse(intentsdata);

    const intents_array = intents.intents;

    let outputsend = "";
    for (let index = 0; index < intents_array.length; index++) {
        if (intents_array[index].tags == class_result) {
            let a = intents_array[index].responses;
            // console.log(a);
            let randomIndex = Math.floor(Math.random() * a.length);
            outputsend = a[randomIndex];
            console.log(a[randomIndex]);


        }

    }





    return NextResponse.json({ "value":outputsend});

}