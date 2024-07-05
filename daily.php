<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class daily extends MY_Controller {

    function __construct(){
        parent::__construct();
        $this->load->model('news_model','mnews');
        $this->load->model('banners_model','mbanners');
        $this->load->model('honor_model','mhonor');
        $this->load->model('coltypes_model','mtypes');
    }

    public function index()
    {
        $data['header']=header_seoinfo(8,0);
        //banners
        $data['banners'] = $this->mbanners->get_all(array('cid'=>39,'audit'=>1),'link,title,photo,attachment','sort_id asc');

        //brand
        $data['brand'] = $this->mhonor->get_all(array('cid'=>40,'audit'=>1),'id,icon,title','sort_id asc');
        //Solution
        $data['solution'] = $this->mbanners->get_all(array('cid'=>41,'audit'=>1),'id,title,link,photo,picture,icon,attachment','sort_id asc');

        //news
        $data['news'] = $this->mnews->get_all(array('cid'=>56,'audit'=>1,'flag'=>1,'is_del'=>0),'id,title,photo,timeline,content','sort_id desc');

        // 产品类型一
        $prtypelist = $this->mtypes->get_all(array('cid'=>59,'fid'=>0),'','sort_id asc');
        $data['typeone'] = $prtypelist;

        // 所有分类
        $data['solution'] = $this->mhonor->get_all(array('cid'=>63,'audit'=>1),'id,title','sort_id asc');

        $data['daily'] = $this->mhonor->get_all(array('cid'=>74,'audit'=>1),'region,title,province,telphone','sort_id desc');

        $this->load->view('daily',$data);
    }
}
