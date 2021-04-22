const First_Upload = () => {
	return new Promise((res, rej) => {
  	setTimeout(() => {
  		if(Math.random() > 0.5) {
          res('resolved')
      } else {
          rej('rejected')
      }
  	}, 1000)
  })
};

const Second_Upload = () => {
	return new Promise((res, rej) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                res('resolved')
            } else {
                rej('rejected')
            }
        }, 1500)
  })
};

const Third_Upload = () => {
	return new Promise((res, rej) => {
  	setTimeout(() => {
        if(Math.random() > 0.5) {
            res('resolved')
        } else {
            rej('rejected')
        }
  	}, 2000)
  })
};

const Forth_Upload = () => {
	return new Promise((res, rej) => {
  	setTimeout(() => {
        if(Math.random() > 0.5) {
            res('resolved')
        } else {
            rej('rejected')
        }
  	}, 2000)
  })
};

const Fifth_Upload = () => {
	return new Promise((res, rej) => {
  	setTimeout(() => {
        if(Math.random() > 0.5) {
            res('resolved')
        } else {
            rej('rejected')
        }
  	}, 2000)
  })
};

const asyncFns = [
    First_Upload,
    Second_Upload,
    Third_Upload,
    Forth_Upload,
    Fifth_Upload,
];

export default asyncFns;