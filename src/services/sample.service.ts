import Sample from "../interfaces/sample.interface";

export default class SampleService {

    private readonly samples: Sample[] = [
        {
            name: 'FourthOfAugust',
        }
    ];

    constructor() {
    }

    findAllSamples() {
        return this.samples;
    }
}