<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class User
 * @package App\Models
 * @version April 11, 2018, 12:39 pm UTC
 *
 * @property string first_name
 * @property string last_name
 * @property string email
 * @property string phone
 * @property string username
 * @property string password
 * @property string api_token
 * @property boolean verified
 * @property integer type
 * @property string remember_token
 */

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $attributes = ['verified' => 1];

    const VERIFIED = 1;
    const UNVERIFIED = 0;

    public $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'username',
        'password',
        'verified',
        'verification_token',
        'record_type_id',
        'remember_token'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'first_name' => 'string',
        'last_name' => 'string',
        'email' => 'string',
        'phone' => 'string',
        'username' => 'string',
        'password' => 'string',
        'verified' => 'boolean',
        'verification_token' => 'string',
        'record_type_id' => 'integer',
        'remember_token' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [

    ];

}
