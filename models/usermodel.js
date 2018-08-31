const appName = 'Usermodel';
const debug = require('debug')(appName);
// const util = require('util');

const pool = require('./pgmodel.js');


	const schools = (faculty, callback) => {
	//	var query =  util.format('SELECT faculty_data.get_all_schools_list(param_faculty_id := %d);', faculty_id);
	return pool.query('SELECT faculty_data.get_all_schools_list(param_faculty_id := $1);', [faculty], (err, res) => {
      if (err) {
        debug(err.stack);
      }else{
				const schoolist = res.rows[0].get_all_schools_list;
				debug('usermodel: ', schoolist);
				callback(schoolist);
			}
    });
	}

module.exports = {
	schools
}
