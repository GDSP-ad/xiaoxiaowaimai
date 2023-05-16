<?php



class Con
{
    static private $pdo;
    static public function getInstance()
    {
        if(!self::$pdo)
        {
            self::$pdo=new self();
        }
        return self::$pdo;
    }

    private function __construct()
    {
        
    }

    private function __clone()
    {

    }

    public function connect()
    {
        include_once './db_config.php';
        try {
        $con = new PDO($dsn, $username, $password);
        //var_dump($pdo);
        //echo '连接成功<br>';
        } catch (PDOException $e) {
            die('连接失败' . $e->getMessage());
        }
        return $con;
    }
}


