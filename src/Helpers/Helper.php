<?php

namespace Shirish71\AdminPanel\Helpers;

class Helper
{
    /**
     * @param $folder
     */
    public function includeRouteFiles($folder)
    {
        $directory = $folder;
        $handle = opendir($directory);
        $directory_list = [$directory];
        while (false !== ($filename = readdir($handle))) {
            if ($filename != '.' && $filename != '..' && is_dir($directory . $filename)) {
                array_push($directory_list, $directory . $filename . '/');
            }
        }
        foreach ($directory_list as $directory) {
            foreach (glob($directory . '*.php') as $filename) {
                require $filename;
            }
        }
    }

    public function deleteCheckForeignKey($data)
    {
        try {
            $data->delete();
            return 204;
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->getCode() == "23000") {
                return 23000;
            } else {
                return $e->getCode();
            }
        }
    }
}

