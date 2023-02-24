const data : { professionalName : string;... = };

exports.getData = (req : any, res : any, next : any) => {
    res.status(200).json(data);
};
