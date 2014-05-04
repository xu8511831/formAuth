/**
 * 表单验证
 * mvvm
 * @time: 2014-4-16
 * @file: model
 * @author: bigwind
 */

KISSY.add( function( S ) {
        
    function Model( element ) {
        this._init.apply(this, arguments);
    }

    
    S.augment( Model, {
        constructor: Model,
        _init: function( idObj ){
            var self = this;

            // 创建一个唯一的uuid
            self._guid = (function(){
                return '_form_' + 
                    ( +new Date() ) + 
                    ( Math.random() + '' ).slice( -8 );
            })();
            self._uuid_ = 1;

            self.isSubmit = true;
            // model
            self._model = {};
        },
        getModel: function(){
            return this._model;
        },
        setModel: function( ele, obj ){
            var self = this;

            self._model[ self._uuid_ ] = obj;
            
            ele.data( self._guid, self._uuid_ );

            self._uuid_++;
        },
        set: function( index, name, val ){

            this._model[ index ][ name ] = val;
        }
    });

    return Model;
});