module.exports = function(mongoose) {
  let modelName = 'invatation';
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema(
    {
      meetingname: {
        type: Types.String,
        required: true
      },
      cityname: {
        type: Types.String,
        required: true
      },
      customername: {
        type: Types.String,
        required: true
      },
      number: {
        type: Types.Number,
        required: true
      },
      list: {
        type: Types.String
      },
      arrivaltime: {
        type: Types.Date
      },
      needbook: {
        type: Types.Boolean,
        required: true
      },
      dinnerpeople: {
        type: Types.String,
        required: true
      },
      hotelinfo: {
        hotelname: {
          type: Types.String,
          required: true
        },
        rooms: [
          {
            roomtypename: {
              type: Types.String,
              required: true
            },
            quantity: {
              type: Types.Number,
              required: true
            }
          }
        ],
        checkintime: {
          type: Types.Date
        },
        days: {
          type: Types.Number
        }
      },
      needuploadphoto: {
        type: Types.Boolean,
        required: true
      }
    },
    { collection: modelName }
  );

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      associations: {}
    }
  };

  return Schema;
};
