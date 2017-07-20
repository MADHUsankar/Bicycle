var mongoose = require('mongoose');
var bcrypt = require('bcrypt');  
var UserSchema = new mongoose.Schema({
	
emailid: { type: String, required: [true,'Email id is required'],unique:true, trim:true},

	
firstname: { type: String, required: [true,'First Name is required'],trim:true,
  validate: { 
          validator: function( name ) {
            return /^[a-zA-Z]+$/.test(name);
          },
          message: "First Name should contain only alphabets"
		} },
		
lastname: { type: String, required: [true,'Last Name is required'],trim:true,
  validate: { 
          validator: function( name ) {
            return /^[a-zA-Z]+$/.test(name);
          },
          message: "Last Name should contain only alphabets"
		} },
		
password: { type: String, required: [true,'Password is required'], trim:true}},
  {timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
	  }
      });
UserSchema.virtual( 'name.full' ).get( function () {
  return this.firstname + " " + this.lastname;
  // return `${ this.name.first } ${ this.name.last}`;
});

// UserSchema.pre('save',function(done){
//   this.password=bcrypt.hashSync( this.password, bcrypt.genSaltSync(8));
//   console.log(this.password)
//   done();
// }); 
var User = mongoose.model('User', UserSchema);