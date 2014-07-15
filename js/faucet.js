/******************\
|  Faucet: Random  |
|   n-Dim. Fields  |
| @author Anthony  |
| @version 0.1     |
| @date 2014/07/14 |
| @edit 2014/07/14 |
\******************/

var Faucet = (function() {
    /**********
     * config */

    /*************
     * constants */

    /*********************
     * working variables */

    /***********
     * objects */

    /********************
     * helper functions */
    function getRandInt(low, high) { //output is in [low, high)
        return Math.floor(this.getRandFloat(low, high));
    }
    function getRandFloat(low, high) { //output is in [low, high)
        return low + Math.random()*(high-low);
    }

    return { //return public functions
        /** @params
          * n --- the number of dimensions
          *
          * @return
          * a Field that accepts n-Dimensional input
        **/
        drip: function(n) {
            
        }
    };
})();