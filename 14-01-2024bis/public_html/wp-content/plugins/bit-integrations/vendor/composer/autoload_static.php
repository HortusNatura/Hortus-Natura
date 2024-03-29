<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5272bab44d8d363bf3393a3a4417dfc9
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'BitCode\\FI\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'BitCode\\FI\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5272bab44d8d363bf3393a3a4417dfc9::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5272bab44d8d363bf3393a3a4417dfc9::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5272bab44d8d363bf3393a3a4417dfc9::$classMap;

        }, null, ClassLoader::class);
    }
}
