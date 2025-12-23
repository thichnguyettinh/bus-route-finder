const stations = {
        
            //Tuyến 01
            'cong_truong_me_linh': { name: 'Công Trường Mê Linh', lat: 10.776879579202573, lng: 106.70582100745948 }, 
            'ben_bach_dang' : { name: 'Bến Bạch Đằng', lat: 10.773906155718194, lng: 106.70635124975797}, 
            'nha_van_hoa_quan_5' : { name: 'Nhà Văn hóa Quận 5', lat: 10.753511327552395, lng: 106.66870092048808}, 
            'ben_xe_buyt_cho_lon' : { name: 'Bến xe buýt Chợ Lớn', lat: 10.751264235714205, lng: 106.65121066539217}, 
            'ben_xe_buyt_sai_gon' : { name: 'Bến xe buýt Sài Gòn', lat: 10.767599573441847, lng: 106.68926165878767}, 
            'nam_ky_khoi_nghia' : { name: 'Nam Kỳ Khởi Nghĩa', lat: 10.770902447228833, lng: 106.70139230125547}, 
            'nha_hat_thanh_pho' : { name: 'Nhà hát Thành phố', lat: 10.777870171239975, lng: 106.70355558059224}, 
            'thanh_xuan' : { name: 'Thạnh Xuân', lat: 10.893085568630704, lng: 106.67333543300238}, //bus 03
            //Tuyến 04
            'dien_bien_phu' : { name: 'Điện Biên Phủ', lat: 10.783448091904914, lng: 106.69282064573721}, //bus 152, 109, 04
            'nha_thieu_nhi_thanh_pho' : { name: 'Nhà thiếu nhi thành phố', lat: 10.783667655957903, lng: 106.68842335758784}, 
            'ben_xe_an_suong' : { name: 'Bến xe An Sương', lat: 10.843919821719012, lng: 106.61372568457547}, //74, 62-5, 104, 61-3, 71, 33, 85, 122, 151, 27, 65, 04, 41, 07
            //Tuyến 06
            'dai_hoc_nong_lam' : { name: 'Đại học Nông Lâm', lat: 10.868256792536263, lng: 106.78772914116895}, //bus 164, 06, 33, 93, 60-1, 60-2, 61-9, 52, 19, 50, 53, 
            'cho_an_dong' : { name: 'Chợ An Đông', lat: 10.757141624179223, lng: 106.67202770188354}, //bus 06, 56, 139, 
            'cho_bau_sen' : { name: 'Chợ Bầu Sen', lat: 10.759144334840826, lng: 106.67836711235006}, //bus 38, 45, 139, 06, 56
            'dai_hoc_su_pham' : { name: 'Trường Đại học Sư phạm TPHCM', lat: 10.761022137524947, lng: 106.68258890798047}, //bus 38, 45, 139, 06, 56
            'dai_hoc_khoa_hoc_tu_nhien' : { name: 'ĐH Khoa học tự nhiên', lat: 10.762229851757024, lng: 106.68306985893597},//bus 06, 38
            'thao_cam_vien' : { name: 'Thảo Cầm Viên', lat: 10.789504768534197, lng: 106.70441798582532},//bus 14, 06, 52, 05, 19
            'ben_xe_cho_lon' : { name: 'Bến xe Chợ Lớn', lat: 10.753329821539399, lng: 106.65204090422156}, //bus 68, 06, 94, 103, 23, 139, 62-7, 62-10, 63-1, 62-1, 62-6, 81, 09
            //Thêm tuyến 07
            'nha_hat_hoa_binh' : { name: 'Nhà hát Hòa Bình', lat: 10.771958634140569, lng: 106.67441842497678},//bus 10, 07, 91 *Nhà hát Hòa Bình q10*
            'ga_sai_gon': { name: 'Ga Sài Gòn', lat: 10.782246545040719, lng: 106.67790549313041 }, //bus 07
            'bai_hau_can_so_1' : { name: "Bãi hậu cần số 1", lat: 10.828802808701404, lng: 106.68344731112015},//bus 148, 07
            //Tuyến 08
            'ben_xe_buyt_quan_8' : { name: 'Bến xe buýt Quận 8', lat: 10.73363828393383, lng: 106.65658355774498},//bus 62-11, 62-9, 22, 62, 08, 22, 59, 34
            'dai_hoc_bach_khoa' : { name: 'ĐH Bách khoa', lat: 10.758498624617475, lng: 106.66207732745116},//bus 50, 94, 08, 59, 63-1
            'cong_vien_hoang_van_thu' : { name: 'Công viên Hoàng Văn Thụ', lat: 10.80044304834966, lng: 106.66359106094566},//bus 63-1, 50, 104, 08, 103, 148, 59, 109, 04, 64
            'suoi_tien' : { name: 'Suối Tiên', lat: 10.866293855156918, lng: 106.80236226763165},//bus 60-2, 67, 60-3, 76, 99, 33, 150, 53, 93, 19, 08, 61-9, 60-1, 60-7, 10
            'nha_van_hoa_sinh_vien' : { name: 'Nhà văn hóa sinh viên', lat: 10.874626365940303, lng: 106.80018077371889},//bus 60-5, 19, 08, 52, 50, 53, 10
            'dai_hoc_khoa_hoc_xa_hoi_va_nhan_van' : { name: 'ĐH Khoa học xã hội và Nhân văn', lat: 10.873543463757187, lng: 106.80228572744262},//bus 60-5, 19, 08, 52, 50, 53, 10
            'ben_xe_buyt_dhqg_moi' : { name: 'Bến xe buýt Đại học Quốc Gia TPHCM (mới)', lat: 10.874513770564846, lng: 106.80766214962068},//bus 10, 52, 33, 50, 19, 08
            //Tuyến 13
            'trong_dong' : { name : 'Trống Đồng', lat: 10.772432388000245, lng: 106.69150542406696},//bus 13, 28, 69, 65, 38
            'cong_truong_dan_chu' : { name : 'Công Trường Dân Chủ', lat: 10.777436191984648, lng: 106.68252997301595},//bus 13, 65
            'cong_vien_le_thi_rieng' : { name : 'Công viên Lê Thị Riêng', lat: 10.786299144611933, lng: 106.66574753197641},//bus 30, 65, 103, 13
            'ben_xe_cu_chi' : { name: 'Bến xe Củ Chi', lat: 10.971636428509182, lng: 106.4821025201218},//bus 70-1, 107, 87, 70-2, 79, 126, 100, 74, 94, 13
            //Tuyến 14
            'ben_xe_mien_dong' : { name: 'Bến xe Miền Đông', lat: 10.814607477902054, lng: 106.7113628258972},//bus 67, 146, 64, 60-3, 24, 14, 43, 61-8, 45
            'dai_truyen_hinh' : { name: 'Đài truyền hình', lat: 10.787302607589334, lng: 106.70200153641652},//bus 14, 45, 06, 52, 05
            'ho_con_rua' : { name : 'Hồ con rùa', lat: 10.783301126582808, lng: 106.69643971565937},//bus 14, 06, 52, 05
            'bao_tang_chung_tich_chien_tranh' : { name: 'Bảo tàng Chứng tích Chiến tranh', lat: 10.779004783014367, lng: 106.69252677286103},//bus 14, 06, 05
            'ben_xe_mien_tay' : { name: 'Bến xe Miền Tây', lat: 10.739466645214684, lng: 106.61947116475466},//bus 41, 32, 151, 91, 139, 148, 60-1, 39, 14, 102, 10
            //Tuyến 19
            'buu_dien_thanh_pho' : { name: 'Bưu Điện Thành Phố', lat: 10.780598241882636, lng: 106.70076419966762},//bus 19, 03, 45
            'bao_tang_lich_su' : { name: 'Bảo tàng Lịch sử', lat: 10.786997433990221, lng: 106.70428781381648},//bus 19
            //Tuyến 31 
            'dai_hoc_ton_duc_thang' : { name: 'Đại học Tôn Đức Thắng', lat: 10.7331801138535, lng: 106.69939580807349},//bus 31 (quận 7)
            'cang_sai_gon' : { name: 'Cảng Sài Gòn', lat: 10.758004236811482, lng: 106.71598203850867},//bus 34, 102, 20, 75, 31
            'pasteur' : { name : 'Pasteur', lat: 10.781017882382995, lng: 106.69646316645868},//bus 06, 05, 31, 14
            'nha_van_hoa_lao_dong' : { name: 'Nhà văn hóa lao động', lat: 10.777046785479264, lng: 106.69274607121719},//bus 31, 161, 64
            'cong_vien_dang_thuy_tram' : { name: 'Công viên Đặng Thùy Trâm', lat: 10.833659529240842, lng: 106.70033307789457},//bus 31
            //Tuyến 34
            'bao_tang_my_thuat' : { name: 'Bảo tàng Mỹ thuật', lat: 10.769328590404145, lng: 106.69965626918939},//bus 86, 39, 34, 102, 38
            //Thêm tuyến 36
            'nha_tho_duc_ba': { name: 'Nhà Thờ Đức Bà', lat: 10.77924769806382, lng: 106.69912050775272 },
            'ben_xe_buyt_thoi_an' : { name: 'Bến xe buýt Thới An', lat: 10.878617098280651, lng: 106.64795850810873},
            //Tuyến 38 
            'dau_ben_tan_quy' : { name: 'Đầu bến Tân Quy', lat: 10.735819985659699, lng: 106.70634148849969},
            'dai_hoc_bach_khoa_cong_sau' : { name : 'ĐH Bách Khoa (cổng sau)', lat: 10.773386516906275, lng: 106.66108146381151},
            'ben_xe_buyt_dam_sen' : { name: 'Bến xe buýt Đầm Sen', lat: 10.76761235899108, lng: 106.64011052692392},
            //Tuyến 39
            //Tuyến 44 
            'ben_xe_buyt_kho_muoi' : { name: 'Bến xe buýt Kho Muối', lat: 10.753062909973885, lng: 106.70167366131497},
            'thu_vien_khoa_hoc_tong_hop': { name: 'Thư Viện Khoa Học Tổng hợp', lat: 10.775564286166993, lng: 106.69886564940873},
            'ben_do_binh_quoi' : { name: 'Bến đò Bình Quới', lat: 10.83174100126749, lng: 106.7426583946158},
            //Tuyến 52
            'tram_dung_dinh_doc_lap' : { name: 'Trạm dừng Dinh Độc Lập', lat: 10.779812553155924, lng: 106.69695203762899},
            'thao_dien' : { name : 'Thảo Điền', lat: 10.801491516172202, lng: 106.73887574594326},
            //Tuyến 53
            'le_hong_phong' : { name: 'Lê Hồng Phong', lat: 10.76131375004196, lng: 106.67665175386149},
            'ben_xe_buyt_dhqg' : { name: 'Bến xe buýt ĐH Quốc Gia', lat: 10.88445131879042, lng: 106.77846225816555},
            //Tuyến 56
            'benh_vien_cho_ray': { name: 'Bệnh viện Chợ Rẫy', lat: 10.754876052929033, lng: 106.65896102983133},
            'dai_hoc_sai_gon' : { name: 'ĐH Sài Gòn', lat: 10.760646463449643, lng: 106.6822565939539},
            'ben_xe_mien_dong_moi' : { name: 'Bến xe Miền Đông mới', lat: 10.879437659754783, lng: 106.81697495450415},
            //Tuyến 64
            'hoc_vien_can_bo' : { name : 'Học viện Cán bộ', lat: 10.811094634496998, lng: 106.70226312669219},
            //Tuyến 65
            'ben_xe_an_suong' : { name: 'Bến xe An Sương', lat: 10.843787806092514, lng: 106.61337568251197},
            //Tuyến 69 
            'truong_tri_tue_viet' : { name: 'Trường Trí Tuệ Việt', lat: 10.80370848591635, lng: 106.59112065566977},
            'dam_sen': { name: 'Công Viên Đầm Sen', lat: 10.769575478108578, lng: 106.63667132414017 },
            'cho_ban_co' : { name: 'Chợ Bàn Cờ', lat: 10.769417822856862, lng: 106.68180374736912},
            
            //Thêm trong lúc add tuyến:
            'cho_cu' : { name: 'Chợ Cũ', lat: 10.771303467065808, lng: 106.70315390995856},//bus 01, 45, 86, 88, 56, 03, 53, 19
            'cao_thang': {name: 'Trường CĐKT Cao Thắng', lat: 10.771319684595698, lng: 106.7020715866766},//01, 38, 45, 39, 86, 20, 34, 56, 88, 03, 102, 19, 75
            'tram_trung_chuyen_tren_duong_ham_nghi' : { name: 'Trạm trung chuyển trên đường Hàm Nghi', lat: 10.771196652971147, lng: 106.70029022806152},//01, 65, 86, 44, 102
            'cho_nanci' : {name: 'Chợ Nanci', lat: 10.757167676336149, lng: 106.68595126577891},//bus 01, 102, 139
            'tran_binh_trong' : {name: 'Trần Bình Trọng', lat: 10.755529471903118, lng: 106.68070075228653},
            'cho_kim_bien' : {name: 'Chợ Kim Biên', lat: 10.750760823766699, lng: 106.65513683246391},
            'ton_dan': {name: 'Tôn Đản', lat: 10.755322944198515, lng: 106.70598068061365}, //bus 44
            'truong_chinh_tri_q4': { name: 'Trường Chính trị Quận 4', lat: 10.759194008653042, lng: 106.70037729776337}, //bus 44
            'le_thi_hong_gam': { name: 'Lê Thị Hồng Gấm', lat: 10.769216867561399, lng: 106.69845065277073}, //bus 44
            'chua_ba_an': {name: 'Chùa Bà Ấn', lat: 10.772479007300134, lng: 106.69607048345317}, //bus 44, 156V
            'so_tai_nguyen_moi_truong': { name: 'Sở Tài nguyên Môi trường', lat: 10.777212170629442, lng: 106.70040676176346}, //bus 44, 155
            'bv_nhi_dong_2_ltt': { name: 'Bệnh viện Nhi đồng 2', lat: 10.780774243437186, lng: 106.70360562096019}, //bus 44, 155
            'ba_son': { name: 'Ba Son', lat: 10.782181259748626, lng: 106.70724806054697}, //bus 44, 53, 56, 88
            'mam_non_hoa_lu': { name: 'Mầm non Hoa Lư', lat: 10.785158695443082, lng: 106.70925695214122}, //bus 30, 44, 53, 56, 88
            'cau_vuot_thu_thiem': { name: 'Cầu vượt Thủ Thiêm', lat: 10.791031089397526, lng: 106.7149214440492}, //bus 44, 159
            'dh_ton_duc_thang': { name: 'Đại học Tôn Đức Thắng', lat: 10.793316691059786, lng: 106.70978250732732}, //bus 44, 159
            'cong_vien_le_van_tam': {name: 'Công viên Lê Văn Tám', lat: 10.787518651335716, lng: 106.69266770823525},
            'cho_tan_dinh' : {name: 'Chợ Tân Định', lat: 10.790518935636447, lng: 106.68871997045375},
            'cho_phu_nhuan' : { name: 'Chợ Phú Nhuận', lat: 10.795098110641737, lng: 106.68305094606902},
            'nga_ba_ho_van_hue' : { name: 'Ngã ba Hồ Văn Huê', lat: 10.805407986987067, lng: 106.67906315750311},
            'chua_van_hanh' : { name: 'Chùa Vạn Hạnh', lat: 10.810323386732163, lng: 106.67854029021156}, //Phú Nhuận
            'cau_vuot_nga_sau_go_vap' : { name: 'Cầu vượt ngã sáu Gò Vấp', lat: 10.824683829719028, lng: 106.68171426036787},
            'nga_tu_phan_van_tri' : { name: 'Ngã tư Phan Văn Trị', lat: 10.832792905916342, lng: 106.67667669091315},
            'cho_thanh_xuan' : {name: 'Chợ Thạnh Xuân', lat: 10.878743582823404, lng: 106.67827414849648},
            'cho_duong' : { name: 'Chợ Đường', lat: 10.89777872842033, lng: 106.68920789258975},
            'nga_ba_hang_xanh': { name: 'Ngã ba Hàng Xanh', lat: 10.803531969261975, lng: 106.71146227103459}, //bus 05, 08, 14, 19, 24, 44, 45, 60-3, 67, 91, 93, 146, 161
            'chua_buu_lien': { name: 'Chùa Bửu Liên', lat: 10.811057268008213, lng: 106.71412397365339}, //bus 44, 158
            'chung_cu_thanh_da': { name: 'Chung cư Thanh Đa', lat: 10.817222303847876, lng:106.72077410666881}, //bus 44
            'cho_binh_quoi': { name: 'Chợ Bình Quới', lat: 10.826797877613641, lng: 106.73664354851239}, //bus 44
            'dh_kinh_te_nvl': { name: 'Đại học Kinh tế', lat: 10.706191944304978, lng: 106.63940470361678}, // 45
            'dai_hoc_gtvt': { name: 'Trường ĐH Giao thông Vận tải Tp. HCM', lat: 10.80472004976871, lng: 106.71584888237315}, // 14, 158, 19, 43, 45
            'dai_hoc_hutech': { name: 'Đại học Hutech', lat: 10.80122326186021, lng: 106.71486058190189}, // 06, 10, 104, 14, 150, 157, 161, 19, 30, 43, 44, 45, 52, 55, 60-3, 67, 72-1
            'dai_hoc_hong_bang': { name: 'Đại học Hồng Bàng', lat: 10.799838370717247, lng: 106.7074028717835}, // 10, 150, 171, 45, 93
            'truong_emst_thalmann' : {name: 'Trường Emst Thalmann', lat: 10.769551826691425, lng: 106.69574118820428}, // 03, 04, 109, 13, 156V, 171, 172, 18, 19, 20, 28, 34, 36, 39, 52, 65, 69, 72-2B, 93, D4
            'dai_hoc_kien_truc' : {name : 'Đại học Kiến Trúc', lat: 10.781755627284705, lng: 106.69474508681303},
            'trung_tam_van_hoa_quan_phu_nhuan' : {name: 'Trung tâm văn hóa Quận Phú Nhuận', lat: 10.79546949718969, lng: 106.67634949160993},
            'benh_vien_quan_phu_nhuan' : { name: 'Bệnh viện Quận Phú Nhận', lat: 10.798824273552837, lng: 106.67086451441496},
            'nga_tu_hoang_hoa_tham' : {name: 'Ngã tư Hoàng Hoa Thám', lat: 10.802163462328654, lng: 106.64709123469665},
            'nga_ba_binh_gia' : {name: 'Ngã ba Bình Giã', lat: 10.802389796289889, lng: 106.6444925650769},
            'nga_ba_che_lan_vien' : { name: 'Ngã ba Chế Lan viên', lat: 10.813281009432862, lng: 106.6341780475182},
            'nguyen_van_thu': { name: 'Nguyễn Văn Thủ', lat: 10.791372725807383, lng: 106.70069394357374}, // 45, 93, 150, 171
            'nguyen_cu_trinh': { name: 'Nguyễn Cư Trinh', lat: 10.764659808217994, lng: 106.69164942928862}, // 45, 56
            'nguyen_trai': { name: 'Nguyễn Trãi', lat: 10.760421461363771, lng: 106.68418347183325}, // 139, 45, 56
            'benh_vien_30_4': { name: 'Bệnh viện 30/4', lat: 10.758009385410821, lng: 106.67379275685775}, // 38, 45
            'nga_tu_ngo_quyen': { name: 'Ngã tư Ngô Quyền', lat: 10.7592764701125, lng: 106.66514097734769}, // 05, 45
            'benh_vien_rang_ham_mat': { name: 'Bệnh viện Răng Hàm Mặt', lat: 10.758368537169188, lng: 106.6608317470698}, // 05, 45, 62, 94
            'benh_vien_cho_ray': { name: 'Bệnh viện Chợ Rẫy', lat: 10.757171613941939, lng: 106.65839089574672}, // 45
            'buu_dien_quan_5': { name: 'Bưu điện Quận 5', lat: 10.75134907656297, lng: 106.65888586155319}, // 01, 07, 08, 10, 45, 56, 62
            'tung_thien_vuong': { name: 'Tùng Thiện Vương', lat: 10.7449208806234, lng: 106.65715281588557}, // 08, 25, 45, 46, 47, 62
            'chua_phap_quang': { name: 'Chùa Pháp Quang', lat: 10.738749340112356, lng: 106.65612182275957}, // 08, 25, 45, 47, 59, 62
            'ben_xe_quan_8': { name: 'Bến xe Quận 8', lat: 10.732949928927598, lng: 106.65629239879438}, // 22, 45, 47, 62-11, 62-9
            'truong_dhsp_ky_thuat' : { name: 'Trường ĐHSP Kỹ Thuật', lat: 10.849576058762633, lng: 106.77179653933884},
            'ben_xe_buyt_dai_hoc_nong_lam' : { name: 'Bến xe buýt ĐH Nông Lâm', lat: 10.868156211568305, lng: 106.78765747835574},
            'dai_hoc_y_duoc' : { name: 'Đại học Y Dược', lat: 10.755449635188892, lng: 106.66302605413776},
            'cong_vien_van_lang' : {name: 'Công viên Văn Lang', lat: 10.757085613845838, lng: 106.66797577334744},
            'hoc_vien_quan_y' : { name: 'Học viện Quân y', lat: 10.766741529539907, lng: 106.66721007371733},
            'vong_xoay_dan_chu' : {name: 'Vòng xoay Dân chủ', lat: 10.778604063425227, lng: 106.68123797888059},
            'cho_nguyen_van_troi' : {name: 'Chợ Nguyễn Văn Trỗi', lat: 10.787096801977354, lng: 106.67960098980677},
            'nga_tu_nguyen_van_troi' : {name: 'Ngã tư Nguyễn Văn Trỗi', lat: 10.793330888368645, lng: 106.67813218103451},
            'binh_hung': { name: 'Bình Hưng', lat: 10.720565587767258, lng: 106.65562070681378}, // 22, 45, 47, 62-11, 62-9
            'sau_quoc_lo_50': { name: 'Sau Quốc lộ 50', lat: 10.72153976830695, lng: 106.6546878703506}, //  102, 140, 22, 45
            'trinh_quang_nghi': {name: 'Trịnh Quang Nghị', lat: 10.703802325178337, lng: 106.63502817734769}, // 102, 140, 22, 45
            'khu_dan_cu_13a': { name: 'Khu dân cư 13A', lat: 10.704930334115334, lng: 106.63767819980546}, // 102, 140, 22, 45
            'dh_bach_khoa_q10': { name: 'Đại học Bách Khoa', lat: 10.771986605362574, lng: 106.6581437374273}, // 50
            'benh_vien_trung_vuong_tht': { name: 'Bệnh viện Trưng Vương', lat: 10.77092765462766, lng: 106.65891043981505}, // 103, 38, 50, 59, 69
            'benh_vien_thong_nhat_ltk': { name: 'Bệnh viện Thống Nhất', lat: 10.791772840391562, lng: 106.6529374892434}, // 08, 145, 148, 50, 59, 63-1, 94
            'benh_vien_quan_tan_binh': { name: 'Bệnh viện Quân Tân Bình', lat: 10.794609523735472, lng: 106.65511598190199}, //08, 103, 13, 145, 148, 30, 50, 59, 63-1, 64, 65, 94
            'rap_tan_son_nhat': { name: 'Rạp Tân Sơn Nhất', lat: 10.802322992351137, lng: 106.6657107025911}, // 07, 148, 50, 59
            'giao_xu_man_coi': { name: 'Giáo xứ Mân Côi', lat: 10.81483801837485, lng: 106.6811021855574}, // 50
            'nga_tu_binh_trieu': { name: 'Ngã tư Bình Triệu', lat: 10.826016355662, lng: 106.71569530857151}, //08, 50, 93
            'nga_tu_to_ngoc_van_pham_van_dong': { name: 'Ngã tư Tô Ngọc Vân - Phạm Văn Đồng', lat: 10.851586174737331, lng: 106.75040226433474}, //08, 50, 57, 93
            'thu_vien_trung_tam_dhqg': { name: 'Thư Viện Trung tâm ĐHQG TPHCM', lat: 10.867720404525823, lng: 106.79508892129586}, // 166, 50, 52
            'dai_hoc_quoc_te_dd_qtst': { name: 'Đại học Quốc tế (đối diện cổng QTST)', lat: 10.876458754293122, lng: 106.80248603558248}, //08, 10, 166, 19, 50, 52, 53, 60-5
            'dai_hoc_quoc_te_dd_lqd': { name: ' Đại học Quốc tế (đối diện cổng Lê Quý Đôn)', lat: 10.878123454476105, lng: 106.80270061228187}, //50, 53, 60-5, 61-05, 61-77, 99
            'khu_cong_nghe_cao_q9': { name: 'Khu Công nghệ cao quận 9', lat: 10.856346364241844, lng: 106.7854380338521}, // 06, 08, 10, 150, 164D, 52, 60-3, 67, 76
            'cau_nhi_thien_duong' : {name: 'Cầu Nhị Thiên Đường', lat: 10.739106299346092, lng: 106.6565450118094},
            'cho_xom_cui' : { name: 'Chợ Xóm Củi', lat: 10.746092835656835, lng: 106.6596257018869},
            'rap_dai_quang' : { name: 'Rạp Đại Quang', lat: 10.752757658073866, lng: 106.65903828297367},
            'benh_vien_hung_vuong' : {name: 'Bệnh viện Hùng Vương', lat: 10.756874430932461, lng: 106.66218352689215},
            'benh_vien_trung_vuong_ltk' : {name: 'Bệnh viện Trưng Vương', lat: 10.77094289064975, lng: 106.6589138861009},
            'buu_dien_phu_tho' : {name : 'Bưu điện Phú Thọ', lat: 10.776663901771883, lng: 106.65673443747656},
            'nga_ba_thanh_thai' : {name: 'Ngã ba Thành Thái', lat: 10.778735161717492, lng: 106.65593477927156},
            'cho_tan_binh' : { name: 'Chợ Tân Bình', lat: 10.786230797438256, lng: 106.65390543641008},
            'benh_vien_quan_tan_binh' : { name: 'Bệnh viện Quận Tân Bình', lat: 10.794825043732091, lng: 106.65548184121654},
            'nga_tu_phan_xich_long' : {name: 'Ngã tư Phan Xích Long', lat: 10.800531654747628, lng: 106.68231505175385},
            'nga_tu_thich_quang_duc' : {name: 'Ngã Tư Thích Quảng Đức', lat: 10.802770974748729, lng: 106.68423266529585},
            'dai_hoc_van_hien_phu_nhuan' : {name: 'Đại học Văn Hiến', lat: 10.80394775587074, lng: 106.68621751939236},
            'nga_tu_binh_trieu' : { name: 'Ngã tư Bình Triệu', lat: 10.826173356969628, lng: 106.71600782626213},
            'chua_uu_dam' : {name: 'Chùa Ưu Đàm', lat: 10.830847808387338, lng: 106.72505236089361},
            'cau_go_dua' : { name: 'Cầu Gò Dưa', lat: 10.842216960277721, lng: 106.7432250841789},
            'cho_thu_duc' : { name: 'Chợ Thủ Đức', lat: 10.851250138896292, lng: 106.75424061457807},
            'nga_ba_chuong_duong' : { name: 'Ngã ba Chương Dương', lat: 10.85051539733559, lng: 106.76098192058576},
            'ben_cong_vien_phan_mem_quang_trung': { name: 'Bến xe buýt Công viên phần mềm Quang Trung', lat: 10.852051475535918, lng: 106.62998391652923}, // 55
            'dong_bac': { name: 'Đông Bắc', lat: 10.855120298462275, lng: 106.62388022060347}, // 18, 24, 55
            'cong_vien_phan_mem_quang_trung_l': { name: 'Công viên phần mềm Quang Trung', lat: 10.85321946412097, lng: 106.62585065904025}, // 18, 24, 55
            'cho_cau': { name: 'Chợ Cầu', lat: 10.84807915797605, lng: 106.63400834612844}, // 18, 24, 55, 62
            'thpt_nguyen_cong_tru': { name: 'Trường THPT Nguyễn Công Trứ', lat: 10.837538978399316, lng: 106.65360861911303}, // 18, 24, 55
            'ubnd_quan_go_vap': { name: 'UBND Quận Gò Vấp', lat: 10.830576418053507, lng: 106.66937212806323}, // 103, 18, 24, 55
            'sieu_thi_van_lang': { name: 'Siêu thị Văn Lang', lat: 10.82671621960667, lng: 106.67889236306895}, //103, 18, 24, 55
            'dau_dao_duy_anh': { name: 'Đầu Đường Đào Duy Anh', lat: 10.80771293730327, lng: 106.6744643619492},
            'trung_tam_hoi_nghi_tiec_cuoi_white_palace': { name: 'Trung tâm hội nghị tiệc cưới White Palace', lat: 10.80015217018094, lng: 106.6750784338438},
            'cong_vien_cau_sai_gon': { name: 'Công viên Cầu Sài Gòn', lat: 10.79910570822542, lng: 106.72220664908522}, //  104, 158, 160, 161, 30, 55
            'nga_ba_chi_hoa' : {name : 'Ngã ba Chí Hòa', lat: 10.780805558046607, lng: 106.67628586289254},
            'chua_buu_da' : {name: 'Chùa Bửu Đà', lat: 10.781591716322232, lng: 106.67472373034614},
            'rap_hat_thanh_van' : {name: 'Rạp hát Thanh Vân', lat: 10.783789681451143, lng: 106.67080448811704},
            'cho_hoa_hung' : {name: 'Chợ Hòa Hưng', lat: 10.784141115705681, lng: 106.67001208882378},
            'nga_ba_banh_van_tran' : {name: 'Ngã ba Bành Văn Trân', lat: 10.788666949696575, lng: 106.66143392171966},
            'nga_ba_hoang_hoa_tham' : {name: 'Ngã ba Hoàng Hoa Thám', lat: 10.796025687832644, lng: 106.64778172715378},
            'cho_vo_thanh_trang' : {name: 'Chợ Võ Thành Trang', lat: 10.801542428104549, lng: 106.63813720942574},
            'nga_tu_tan_ky_tan_quy' : { name: 'Ngã tư Tân Kỳ Tân Quý', lat: 10.804787724743289, lng: 106.63571060806686},
            'chua_vinh_phuoc' : { name: 'Chùa Vĩnh Phước', lat: 10.83214902168796, lng: 106.62193737105372},
            'bitis' : { name: 'Bitis', lat: 10.838189276289393, lng: 106.61828525837481},
            'trung_tam_van_hoa_quan_12' : {name: 'Trung tâm văn hóa Quận 12', lat: 10.855624172409867, lng: 106.60760519165792},
            'nga_ba_cu_cai' : {name: 'Ngã ba Củ Cải', lat: 10.860833795874877, lng: 106.60324889276485},
            'nga_ba_bui_mon' : {name: 'Ngã ba Bùi Môn', lat: 10.870228062370787, lng: 106.59730826154453},
            'nga_tu_gieng_nuoc' : {name: 'Ngã tư Giếng Nước', lat: 10.877464968187608, lng: 106.59180659429008},
            'nga_tu_hoc_mon' : {name: 'Ngã tư Hóc Môn', lat: 10.884629672640884, lng: 106.5870449022951},
            'dan_thang' : {name: 'Dân Thắng', lat: 10.888756361267554, lng: 106.58389042907832},
            'nga_ba_lam_son' : {name: 'Ngã ba Lam Sơn', lat: 10.893189516504638, lng: 106.5808445242191},
            'doanh_trai_quan_doi' : {name: 'Doanh trại Quân đội', lat: 10.895919280461671, lng: 106.57932906022522},
            'nga_ba_hong_chau' : { name: 'Ngã ba Hồng Châu', lat: 10.899600846933195, lng: 106.57579910099557},
            'cau_an_ha' : { name: 'Cầu An Hạ', lat: 10.91634103957631, lng: 106.56437073317043},
            'benh_vien_xuyen_a' : {name: 'Bệnh viện Xuyên Á', lat: 10.926803491052567, lng: 106.55723847413087},
            'mui_tau_tinh_lo_2' : {name: 'Mũi tàu Tỉnh lộ 2', lat: 10.934584621364882, lng: 106.54981475599159},
            'nga_tu_quan_doi' : {name: 'Ngã tư Quán đôi', lat: 10.947205710398741, lng: 106.5249214828901},
            'cau_vuot_cu_chi' : {name: 'Cầu vượt Củ Chi', lat: 10.967685634199574, lng: 106.48828458971191},
            'bao_tang_ton_duc_thang': { name: 'Bảo tàng Tôn Đức Thắng', lat: 10.777329310196384, lng: 106.70709887012164}, // 53, 56, 88
            'tan_cang': { name: 'Tân Cảng', lat: 10.796510550798823, lng: 106.7198143297302}, //  30, 53, 56
            'cho_phuong_25' : {name: 'Chợ phường 25', lat: 10.808373356753016, lng: 106.71449826358679},
            'dai_hoc_ngoai_thuong' : { name: 'Đại học Ngoại Thương', lat: 10.806685053087236, lng: 106.7160714146061},
            'nga_ba_nguyen_cuu_van' : {name: 'Ngã ba Nguyễn Cửu Vân', lat: 10.79507528580521, lng: 106.70946551089669},
            'cho_phuong_10' : {name: 'Chợ phường 10', lat: 10.76814834296763, lng: 106.67342627469762},
            'nga_ba_nguyen_kim' : { name: 'Ngã ba Nguyễn Kim', lat: 10.765101680209337, lng: 106.66212878847482},
            'cau_ong_buong' : { name: 'Cầu Ông Buông', lat: 10.75485979506289, lng: 106.63563784575584},
            'vong_xoay_phu_lam' : {name: 'Vòng xoay Phú Lâm', lat: 10.753480971761817, lng: 106.63339179646604},
            'cong_vien_phu_lam' : {name: 'Công viên Phú Lâm', lat: 10.747496456487434, lng: 106.62622383316317},
            'lang_thieu_nien_thu_duc': { name: 'Làng Thiếu Niên Thủ Đức', lat: 10.849723321784769, lng: 106.75869458349268}, 
            'tram_y_te_phuong_hiep_phu': { name: 'Trạm y tế Phường Hiệp Phú', lat: 10.844093367266018, lng: 106.78202052569526}, // 141, 162V, 56, 76, 99
            'hoc_vien_thanh_thieu_nien': { name: 'Học viện Thanh Thiếu niên Việt Nam', lat: 10.862819238523818, lng: 106.8135670374916}, // 164V, 56
            'nga_ba_lam_vien_1': { name: 'Ngã ba Lâm Viên 1', lat: 10.870494322892066, lng: 106.81263370985555}, // 150, 56, 61-05, 61-77, 61-9, 76, 93
            'nghia_trang_liet_si_tphcm': { name: 'Nghĩa trang liệt sĩ TP.HCM', lat: 10.873548640206659, lng: 106.80949990472867}, //  08, 10, 150, 164V, 19, 33, 53, 56, 60-1, 60-2, 60-3, 60-7, 61-05, 61-9, 67, 93, 99
            'dai_hoc_an_ninh_nhan_dan' : { name: 'Đại học An Ninh Nhân Dân', lat: 10.871683805145548, lng: 106.80674562530353},
            'khu_du_lich_suoi_tien' : {name: 'Khu DL Suối Tiên', lat: 10.866398156736837, lng: 106.8011843402474},
            'thao_nguyen' : { name: 'Thảo Nguyên', lat: 10.865524982948372, lng: 106.79379243245704},
            'cau_vuot_linh_xuan' : { name: 'Cầu vượt Linh Xuân', lat: 10.874441559634093, lng: 106.76210447478537},
            'ben_xe_lam_hong' : { name: 'Bến xe lam Hồng', lat: 10.876190651219673, lng: 106.75644611161906},
            'cho_tam_hai' : {name: 'Chợ Tam Hải', lat: 10.873349032331683, lng: 106.74440668165735},
            'cho_tam_binh' : { name: 'Chợ Tam Bình', lat: 10.870990525050543, lng: 106.7346528829753},
            'dai_hoc_canh_sat' : {name: 'Đại học Cảnh sát', lat: 10.734914949096177, lng: 106.70047163236319},
            'cau_da_khoa' : { name: 'Cầu Đa Khoa', lat: 10.739166760118376, lng: 106.72217667387339},
            'cau_ly_phuc_man' : {name: 'Cầu Lý Phục Man', lat: 10.743092272486626, lng: 106.72170475784026},
            'cho_xom_chieu': {name: 'Chợ Xóm Chiếu', lat: 10.76501525257174, lng: 106.70645090304542},
            'nguyen_kim' : {name: 'Nguyễn Kim', lat: 10.768288921589525, lng: 106.69576156711216},
            'cong_vien_le_van_tam': {name: 'Công viên Lê Văn Tám', lat: 10.787437011611756, lng: 106.69263198712848},
            'nha_tho_binh_hoa' : {name: 'Nhà thờ Bình Hòa', lat: 10.809853143103046, lng: 106.69627933587722},
            'nga_nam_binh_hoa' : { name: 'Ngã năm Bình Hòa', lat: 10.811905739391579, lng: 106.69608490182203},
            'cau_binh_loi_bus31' : {name: 'Cầu Bình Lợi', lat: 10.823213870588178, lng: 106.7072545800806},
            'buu_dien_quan_4' : { name: 'Bưu điện Quận 4', lat: 10.763809451016662, lng: 106.7076994805904},
            'dai_hoc_nguyen_tat_thanh' : {name: 'Đại học Nguyễn Tất Thành', lat: 10.76191146108027, lng: 106.70924744919019},
            'san_bong_da_clb_cang_sg' : {name: 'Sân bóng đá CLB cảng SG', lat: 10.752537970099647, lng: 106.72236870832961},
            'truong_mn_tan_thuan_tay' : {name: 'Trường mầm non Tân Thuận Tây', lat: 10.753599317687197, lng: 106.72112269654633},
            'cu_xa_ngan_hang' : { name: 'Cư xá Ngân hàng', lat: 10.75277979864718, lng: 106.71883374446305},
            'nha_tho_thuan_phat' : {name: 'Nhà Thờ Thuận Phát', lat: 10.752036695854658, lng: 106.71534955494887},
            'mieu_ba_co' : {name: 'Miếu Bà Cố', lat: 10.752366085608838, lng: 106.71318769447768},
            'nga_ba_tan_quy' : {name: 'Ngã ba Tân Quy', lat: 10.751553671430386, lng: 106.70504181048813},
            'trung_tam_y_te_tan_quy' : {name: 'Trung tâm y tế Tân Quy', lat: 10.745337603723542, lng: 106.70361241366075}, 
            'cho_tan_quy' : {name: 'Chợ Tân Quy', lat: 10.745439168552565, lng: 106.70684967492218},
            'cho_chieu' : {name: 'Chợ Chiều', lat: 10.744937684773067, lng: 106.713423800539},
            'cho_tan_my' : {name: 'Chợ Tân Mỹ', lat: 10.735518503473582, lng: 106.71804219692592},
            'cau_ong_be' : {name: 'Cầu Ông Bé', lat: 10.728689591456229, lng: 106.68426785969133},
            'ubnd_quan_8': { name: 'UBND Quận 8', lat: 10.74000482968314, lng: 106.66623616439699}, 
            'pham_hung': { name: 'Phạm Hùng', lat: 10.7357629683927, lng: 106.66860693266877},
            'nha_tho_nam_hai': { name: 'Nhà thờ Nam Hải', lat: 10.737519173274256, lng: 106.67085559394175},
            'benh_vien_nguyen_tri_phuong_ntp': { name: 'Bệnh viện Nguyễn Tri Phương', lat: 10.755500245597622, lng: 106.66966438900815},           
            'ubnd_phuong_thoi_an' : {name: 'UBND Phường Thới An', lat: 10.875766528898685, lng: 106.64943776404037},
            'nha_tho_nu_vuong_hoa_binh' : {name: 'Nhà thờ Nữ Vương Hòa Bình', lat: 10.856872184552662, lng: 106.65378516816482},
            'cau_cut' : {name: 'Cầu Cụt', lat: 10.854325232555583, lng: 106.65682048816592},
            'nha_tho_hop_an' : {name: 'Nhà thờ Hợp An', lat: 10.853799684368953, lng: 106.66459738774711},
            'nha_tho_ha_noi' : {name: 'Nhà thờ Hà Nội', lat: 10.85108466282697, lng: 106.66510652835659},
            'truong_dai_hoc_hong_bang' : {name: 'Trường Đại học Hồng Bàng', lat: 10.84471858081359, lng: 106.66465352384802}, //bus 36
            'nga_ba_nguyen_van_luong' : {name: 'Ngã ba Nguyễn Văn Lượng', lat: 10.839237434197365, lng: 106.66525490946027},
            'cho_thong_tay' : {name: 'Chợ Thông Tây', lat: 10.835059041120697, lng: 106.66589580712869},
            'nga_tu_nguyen_oanh' : {name: 'Ngã tư Nguyễn Oanh', lat: 10.831049096565255, lng: 106.67671878305805},
            'cho_phan_van_tri' : {name: 'Chợ Phan Văn Trị', lat: 10.813296639125321, lng: 106.69521627951801},
            'dien_bien_phu_q3' : {name: 'Điện Biên Phủ', lat: 10.784930529729824, lng: 106.69343915412836},//bus 30, 36
            'dai_hoc_kinh_te_q10': { name: 'Đại học kinh tế', lat:10.761400384793612, lng: 106.66863628555951},
            'nga_tu_dinh_bo_linh': { name: 'Ngã Tư Đinh Bộ Lĩnh', lat: 10.813645934614657, lng: 106.70928159744128},
            'ubnd_phuong_13': { name: 'UBND Phường 13', lat: 10.819689221767437, lng: 106.70333270402719},
            'cau_rach_lang': { name: 'Cầu Rạch Lăng', lat: 10.81630449344683, lng: 106.70058563798707},
            'cau_kinh_te' : {name: 'Cầu Kinh Tẻ', lat: 10.746968353772678, lng: 106.70219368429849},
            'chua_anh_linh' : {name: 'Chùa Anh Linh', lat: 10.763148071948113, lng: 106.70365313270723},
            'cach_mang_thang_8' : {name: 'Cách mạng Tháng 8', lat: 10.773412225430791, lng: 106.68905758046117}, //bus 05, 06, 14, 38
            'vong_xoay_le_dai_hanh' : { name: 'Vòng xoay Lê Đại Hành', lat: 10.770013566165328, lng: 106.65204579408172},//bus 27, 38
            'nga_tu_lac_long_quan' : {name: 'Ngã tư Lạc Long Quân', lat: 10.774165351268053, lng: 106.6485027076449},
            'tram_dang_kiem' : {name: 'Trạm Đăng Kiểm', lat: 10.77015633675481, lng: 106.64461620551282},//bus 38, 145, 148
            'cong_truoc_svd_quan_khu_7': { name: 'Cổng trước SVĐ Quân Khu 7', lat: 10.800845341900136, lng: 106.66677610248585}, 
            'hoi_cho_trien_lam_tan_binh': { name: 'Hội Chợ Triển lãm Tân Bình', lat: 10.79598621524626, lng: 106.65528995639416},
            'cay_xang_doi': {name: 'Cây xăng Đôi', lat: 10.794202574474513, lng: 106.65211244771068},
            'hoi_chu_thap_do_tan_binh': { name: 'Hội Chữ thập đỏ Tân Bình', lat: 10.796321994984751, lng: 106.64558209228865},
            'nga_tu_nguyen_hong_dao': { name: 'Ngã tư Nguyễn Hồng Đào', lat: 10.793112129262965, lng: 106.64111915208234},
            'tram_nga_4_thoai_ngoc_hau': { name: 'Trạm Ngã 4 Thoại Ngọc Hầu', lat: 10.78665832430104, lng: 106.64127882981127}, 
            'ubnd_quan_tan_phu': { name: 'UBND Quận Tân Phú', lat: 10.783209706502499, lng: 106.63777767046042},
            'thoai_ngoc_hau': { name: 'Thoại Ngọc Hầu', lat: 10.779183724296043, lng: 106.635304508134},
            'nga_4_hoa_binh': { name: 'Ngã 4 Hòa Bình', lat: 10.770013561521042, lng: 106.63284086400151},
            'khach_san_new_world_pht': { name: 'Khách sạn New World', lat: 10.771273901848025, lng: 106.69568350144225},
            'cho_dan_sinh' : {name: 'Chợ Dân Sinh', lat: 10.767247297757978, lng: 106.6982954908388},
            'cho_nga' : {name: 'Chợ Nga', lat: 10.761667797818916, lng: 106.69615987551458},
            'cho_hoa_binh' : {name: 'Chợ Hòa Bình', lat: 10.751828158344189, lng: 106.67673685413773},
            'cau_lo_gom' : {name: 'Cầu Lò Gốm', lat: 10.737374763307084, lng: 106.63918552398371},
            'cau_rach_cay' : {name: 'Cầu Rạch Cây', lat: 10.73224942110929, lng: 106.63050006222853},
            'chua_sung_quang' : {name: 'Chùa Sùng Quang', lat: 10.72378209444783, lng: 106.61011395384485},
            'hang_duong' : {name: 'Hàng Dương', lat: 10.728247582486642, lng: 106.60769968396787},
            'benh_vien_truyen_mau_huyet_hoc': { name: 'Bệnh viện Truyền máu huyết học', lat:10.767573589302714, lng: 106.68510039724559},
            'cho_thai_binh': { name: 'Chợ Thái Bình', lat: 10.766831425845503, lng: 106.68764294391065},
            'ktx_tran_hung_dao': { name: 'KTX Trần Hưng Đạo', lat: 10.767222849121373, lng: 106.69482249679815},
            'ga_metro_thu_duc': { name: 'Ga metro Thủ Đức', lat: 10.845598049445881, lng: 106.7713862579595},
            'dau_duong_le_van_chi': { name: 'Đầu đường Lê Văn Chí', lat: 10.85059064627299, lng: 106.774096534788},
            'nga_ba_le_van_chi': { name: 'Ngã ba Lê Văn Chí', lat: 10.854114906539118, lng: 106.77194145543437},
            'dai_hoc_ngan_hang': { name: 'Đại học Ngân hàng', lat: 10.85829942430353, lng: 106.76321065922893},
            'ubnd_phuong_linh_trung': { name: 'UBND phường Linh Trung', lat: 10.864008078344257, lng: 106.76120840422368},
            'ho_da': { name: 'Hồ Đá', lat: 10.883091511096302, lng: 106.79999915178801},
            'nga_sau_phu_dong': { name: 'Ngã sáu Phù Đổng', lat: 10.7710111806076, lng: 106.69377762527152},
            'cach_mang_thang_tam': { name: 'Cách mạng Tháng Tám', lat: 10.774600220778165, lng: 106.68634889216189},
            'cho_chim_xanh': { name: 'Chợ Chim Xanh', lat: 10.765998425126329, lng: 106.64736671853048},
            'tram_pham_van_xao': { name: 'Trạm Phạm Văn Xảo', lat: 10.788350484958096, lng: 106.62354896077757},
            'tram_cho_tan_huong': { name: 'Trạm Chợ Tân Hương', lat: 10.789945147395798, lng: 106.61904214000313},
            'tram_nga_4_go_dau_tan_quy': { name: 'Trạm Ngã 4 Gò Dầu- Tân Quý', lat: 10.795110557184193, lng: 106.62037910098685},
            'tram_tan_ky_tan_quy': { name: 'Trạm Tân Kỳ Tân Quý', lat: 10.795934779587062, lng: 106.61408050694166},
            'tram_xang': { name: 'Trạm Xăng', lat: 10.802013659044412, lng: 106.62623806875904},
            'tram_dau_le_trong_tan': { name: 'Trạm Đầu Lê Trọng Tấn', lat: 10.804317284533576, lng: 106.6322325429437},
            'tram_tay_thanh': { name: 'Trạm Tây Thạnh', lat: 10.808243452627524, lng: 106.61913089679716},
            'ubnd_binh_hung_hoa_b': { name: 'Ủy ban nhân dân Bình Hưng Hòa B', lat: 10.814198711448034, lng: 106.59387257751547},
            'cau_tan_thuan_2': { name: 'Cầu Tân Thuận 2', lat: 10.752439258779058, lng: 106.72388109999999},
            'pha_binh_khanh': { name: 'Phà Bình Khánh', lat: 10.67382905648656, lng: 106.7653209476905},
            'cho_binh_khanh': { name: 'Chợ Bình Khánh', lat: 10.66303385241389, lng: 106.77744981696456},
            'nghia_trang_binh_khanh': { name: 'Nghĩa Trang Bình Khánh', lat: 10.61406134885216, lng: 106.81872996148965},
            'nga_3_an_thoi_dong': { name: 'Ngã 3 An Thời Đông', lat: 10.575794411601091, lng: 106.82459280297718},
            'nga_ba_dao_khi': { name: 'Ngã ba Đảo Khỉ', lat: 10.407284840823827, lng: 106.89836308283523},
            'cay_xang_duc_thanh': { name: 'Cây xăng Đức Thanh', lat: 10.395402374426974, lng: 106.91663001894361}, 
            'benh_vien_huyen_can_gio': { name: 'Bệnh viện huyện Cần Giờ (cũ)', lat: 10.407182659468665, lng: 106.96556490969094},
            'ben_xe_cho_lon_a': { name: 'Bến xe buýt Chợ Lớn - A', lat: 10.751154664002366, lng: 106.65129408973843},
            'ta_uyen': { name: 'Tạ Uyên', lat: 10.754438562365879, lng: 106.6538210115584},
            'truong_thpt_nguyen_du': { name: 'Trường THPT Nguyễn Du', lat: 10.77863657389222, lng: 106.66236948013803},
            'nga_tu_dong_nai': { name: 'Ngã tư Đồng Nai', lat: 10.781164954981252, lng: 106.66180561215711},
            'cong_vien_le_thi_rieng_q10': { name: 'Công viên Lê Thị Riêng', lat: 10.78518621410129, lng: 106.6662051478646},
            'parkson_truong_son': { name: 'Parkson Trường Sơn', lat: 10.809714907158256, lng: 106.66490287766912},
            'ga_quoc_noi_san_bay_tan_son_nhat': { name: 'Ga Quốc nội Sân bay Tân Sơn Nhất', lat: 10.813933139197873, lng: 106.66270584494517},
            'vong_xoay_nguyen_thai_son': { name: 'Vòng xoay Nguyễn Thái Sơn', lat: 10.813999537839049, lng: 106.67761323978613},
            'cho_cay_tram': { name: 'Chợ Cây Trâm', lat: 10.838689290848196, lng: 106.65781406227705},
            'nga_ba_le_duc_tho': { name: 'Ngã ba Lê Đức Thọ', lat: 10.854080260293173, lng: 106.6560212035783},
            'nha_tho_nu_vuong_hoa_binh': { name: 'Nhà thờ Nữ Vương Hòa Bình', lat: 10.856779412785986, lng: 106.65411673394054},
            'ubnd_quan_12': { name: 'UBND Quận 12', lat: 10.861772395676747, lng: 106.6540524448363},
            'dd_ben_xe_nga_tu_ga': { name: 'Bến xe Ngã tư Ga', lat: 10.861399651322712, lng: 106.67951082378225},
            'ngoc_lan': {name: 'Ngọc Lan', lat: 10.863231739359122, lng: 106.68177474896383},
            'thao_loan_plaza': { name: 'Thảo Loan PLAZA', lat: 10.731010153517774, lng: 106.68925048212891},
            'thao_loan_plaza_259': { name: 'Thảo Loan Plaza', lat: 10.731586538077353, lng: 106.68961575117669},
            'vong_xoay_cau_him_lam': { name: 'Vòng xoay cầu Him Lam', lat: 10.737774446605341, lng: 106.68972643878351},
            'truong_duong_ba_trac': { name: 'Trường Dương Bá Trạc', lat: 10.746535685578262, lng: 106.68919460250765},
            'benh_vien_rang_ham_mat_q1': { name: 'Bệnh Viện Răng Hàm Mặt', lat: 10.763509553104669, lng: 106.69163434503326},
            'chua_truong_thanh': { name: 'Chùa Trường Thạnh', lat: 10.768524510971206, lng: 106.6966855173335},
            'cho_dan_sinh': { name: 'Chợ Dân sinh', lat: 10.766192910412364, lng: 106.69865381445545},
            'so_giao_dich_chung_khoan': { name: 'Sở Giao dịch chứng khoáng', lat: 10.768728354550476, lng: 106.70150170463204},
            
            'ga_ben_thanh': { name: 'Ga Bến Thành', lat: 10.770119046684593, lng: 106.69656144975636},
            'cho_ben_thanh' : { name: 'Chợ Bến Thành', lat: 10.772904277277982, lng: 106.69925164212415},

    
            //Tuyến 75 
            'ben_xe_buyt_can_gio' : { name: 'Bến xe buýt Cần Giờ', lat: 10.410388283658031, lng: 106.96380745454134},
            //Tuyến 93
            //Tuyến 102
            //Tuyến 140 
            'dai_hoc_van_hien' : { name: 'Trường ĐH Văn Hiến (huyện Bình Chánh)', lat: 10.709807731922382, lng: 106.64402504928685},
            //Tuyến 152 
            'khu_dan_cu_trung_son' : { name: 'Khu dân cư Trung Sơn', lat: 10.733992175640653, lng: 106.68905905601058},
            'san_bay_tan_son_nhat' : { name: 'Sân bay Tân Sơn Nhất', lat: 10.815797202306673, lng: 106.66421777721922},
        
            //Trạm mới thêm:
            'cho_ban_co' : { name: 'Chợ Bàn Cờ', lat: 10.769417822856862, lng: 106.68180374736912}, //bus 69, 150
            'nha_tho_dong_tien' : { name: 'Nhà thờ Đồng Tiến', lat: 10.77058792588537, lng: 106.66628730016882}, //bus 38, 69
            'ong_ta' : { name: 'Ông Tạ', lat: 10.789810430831974, lng: 106.66066594323648}, //bus 13, 30, 65, 103
            'vong_xoay_cay_go' : { name: 'Vòng Xoay Cây Gõ', lat: 10.75524424625235, lng: 106.6440008901009}, //bus 14
            'tan_ky_tan_quy' : { name: 'Tân Kỳ Tân Quý', lat: 10.799026622837317, lng: 106.61973106255283}, //bus 32
            'lang_ong_ba_chieu' : { name: 'Lăng Ông Bà Chiểu', lat: 10.802155479794472, lng: 106.69648243509224}, //bus 18, 31, 36
            'nga_tu_nguyen_chi_thanh' : { name: 'Ngã tư Nguyễn Chí Thanh', lat: 10.761327593770257, lng: 106.67322919824421}, //bus 38
            'nga_tu_tran_binh_trong' : { name: 'Ngã tư Trần Bình Trọng', lat: 10.764094749338629, lng: 106.67877058720967}, //bus 05, 53
            'nga_sau_cong_hoa' : { name: 'Ngã sáu Cộng Hòa', lat: 10.765728819115123, lng: 106.68084994033775}, //bus
            'vo_van_tan' : { name: 'Võ Văn Tần', lat: 10.77419108219001, lng: 106.68875563970671}, //bus 13, 69
            'benh_vien_tu_du' : { name: 'Bệnh viện Từ Dũ', lat: 10.768754194648267, lng: 106.68494539448045},
            'nguyen_thi_minh_khai' : { name: 'Nguyễn Thị Minh Khai', lat: 10.779826617806515, lng: 106.69670537010354}, //Tuyến 04, 05, 06, 14, 152
            'ho_thi_ky' : { name: 'Hồ Thị Kỷ', lat: 10.767434322233441, lng: 106.67571720447262 }, //bus 14, 27, 69, 150
            'cau_ong_lanh' : { name: 'Cầu Ông Lãnh', lat: 10.766268159452395, lng: 106.69655036346528}, //bus 46, 139
            'vong_xoay_lang_cha_ca' : { name: 'Vòng xoay Lăng Cha Cả', lat: 10.798670445746632, lng: 106.65908940944085}, //bus 08,50,59,64,103,145,148
            'ben_xe_nga_tu_ga' : { name: 'Bến xe Ngã tư Ga', lat: 10.862281068130914, lng: 106.67821072112716}, //103
            'le_dai_hanh' : { name: 'Lê Đại Hành', lat: 10.761724283055056, lng: 106.65624716749073}, //bus 14, 62, 103
            'nga_tu_nguyen_gian_thanh' : { name: 'Ngã tư Nguyễn Giản Thanh', lat: 10.78254740549614, lng: 106.66482001165187}, //bus 103
            'nga_ba_pham_ngu_lao' : { name: 'Ngã ba Phạm Ngũ Lão', lat: 10.81970326617693, lng: 106.68315240450562}, //bus 03, 07, 55, 59, 103, 148
            'nga_tu_ga' : { name: 'Ngã tư Ga', lat: 10.857060323054819, lng: 106.67976587482617}, // bus 03, 32, 59, 161
            'nha_van_hoa_thanh_nien' : { name: 'Nhà văn hoá Thanh niên', lat: 10.781529266975589, lng: 106.69727123461277}, // bus 30, 36, 52
            'vong_xoay_hang_xanh' :  {name : 'Vòng xoay Hàng Xanh', lat: 10.801590659793593, lng: 106.70994993326723}, //bus 10, 150, 45
            'nha_tho_tan_dinh' : { name: 'Nhà thờ Tân Định', lat: 10.789219059280558, lng: 106.69040636589136}, // bus 30, 31, 36
            'nha_tho_dong_chua_cuu_the': { name: 'Nhà thờ Dòng Chúa Cứu Thế', lat: 10.78124751859594, lng: 106.6814972893805}, //bus 07
            'cho_ba_chieu' : { name: 'Chợ Bà Chiểu', lat: 10.803039578386386, lng: 106.69954096570196}, //bus 08, 24, 55, 91, 104
            'hai_thuong_lan_ong' : { name: 'Hải Thượng Lãn Ông', lat: 10.751059817079694, lng: 106.65844786619502}, //bus 01, 07, 10, 25 39, 47, 46
            'tram_dang_kiem' : { name: 'Trạm đăng kiểm', lat: 10.770072988803685, lng: 106.64471711756606}, //bus 38, 145, 148 
            'ngo_gia_tu' : { name: 'Ngô Gia Tự', lat: 10.7589059887671, lng: 106.66810281789418}, //bus 07, 10, 150 
            'cong_vien_phan_mem_quang_trung' : { name: 'Công viên Phần mềm Quang Trung', lat: 10.852796817613779, lng: 106.62654401835026}, //bus 18, 24, 55, 62
            'nga_tu_bay_hien' : { name:  'Ngã tư Bảy Hiền', lat: 10.79418228652785, lng: 106.6512868099589}, //bus 13, 30, 34, 65, 94
            'benh_vien_175' : { name: 'Bệnh viện 175', lat: 10.820057218225324, lng: 106.67872840731026}, //bus 03, 07, 55, 59, 103, 148
            'cho_tan_son_nhat': { name: 'Chợ Tân Sơn Nhất', lat: 10.816884420715295, lng: 106.6786307484423}, //bus 03, 07, 55, 59, 103, 148
            'nga_tu_an_nhon' : { name: 'Ngã tư An Nhơn', lat: 10.842399534328054, lng: 106.67679133592516}, //bus 03, 32, 59, 161
            'nha_tho_xom_thuoc' : { name: 'Nhà thờ Xóm Thuốc', lat: 10.829221015971676, lng: 106.67259413891962}, //bus 18, 24, 55, 103
            'benh_vien_115' : { name: 'Bệnh viện 115', lat: 10.772843647205525, lng: 106.66516618899877}, //bus 38, 59, 69
            'benh_vien_nhiet_doi' : {name: 'Bệnh viện Nhiệt Đới', lat: 10.752598634564281, lng: 106.67995177201202}, //bus 39
            'benh_vien_thong_nhat' : {name: 'Bệnh viện Thống Nhất', lat: 10.792767078552846, lng: 106.65402339447255}, //bus 13, 30, 65, 103
            'cho_tan_binh': { name: 'Chợ Tân Bình', lat: 10.787721348213143, lng: 106.65340796110047}, //bus 08, 50, 59, 63-1, 94
            'benh_vien_nhi_dong_1' : {name: 'Bệnh viện Nhi Đồng 1', lat: 10.768146927295083, lng: 106.66995370482724}, //bus 14, 27, 38, 69
            'benh_vien_nhi_dong_2' : {name: 'Bệnh viện Nhi Đồng 2', lat: 10.780083896564106, lng: 106.70145448443499}, //bus 03, 19, 45
            'nga_tu_phu_nhuan' : {name: 'Ngã tư Phú Nhuận', lat: 10.799125297448683, lng: 106.67881780897015}, //bus 03, 08, 55, 64, 104
            'cau_sai_gon': {name: 'Cầu Sài Gòn', lat: 10.79860884275265, lng: 106.71934680277255}, //bus 06, 10, 30, 43, 52, 55, 60-3, 67, 104, 150, 157, 161
            'ben_xe_van_thanh': {name: 'Bến xe Văn Thánh', lat: 10.801422513505173, lng: 106.7175062142461}, // bus 30, 55, 104, 157, 158, 161
            'truong_pham_ngoc_thach' : { name: 'Trường Phạm Ngọc Thạch', lat: 10.77349570237668, lng: 106.64892134949844}, //bus 27, 38
            'benh_vien_trung_vuong': { name: 'Bệnh viện Trưng Vương', lat: 10.769625213716134, lng: 106.65807896051352}, //bus 08, 63-1, 94, 103
            'nha_thi_dau_phu_tho' : { name: 'Nhà thi đấu Phú Thọ', lat: 10.77026884921106, lng: 106.65708059683915},// bus 38, 69
            'nha_hat_hoa_binh': { name: 'Nhà hát Hoà Bình', lat: 10.77170936180211, lng: 106.67480155225057}, //bus 07
            'benh_vien_tu_du': { name: 'Bệnh viện Từ Dũ', lat: 10.769667831742362, lng: 106.68554698124711}, //bus 05, 06, 14, 38
            'truong_ernst_thalmann': {name: 'Trường Ernst Thalmann', lat: 10.768785043639802, lng: 106.69591375335814}, //bus 01, 28, 45, 69, 75, 139
            'cong_vien_van_hoa_phu_nhuan' : { name: 'Công viên văn hóa Phú Nhuận', lat: 10.803557956318988, lng: 106.69051814064622},//bus 08, 55, 64, 104
            'nga_nam_liet_si': { name: 'Ngã Năm Liệt Sĩ', lat: 10.812141935606908, lng: 106.71062546540577}, //bus 14, 19, 43, 45, 61-8, 64
            'dau_cong_vien_gia_dinh' : { name: 'Đầu Công viên Gia Định', lat: 10.813297541283765, lng: 106.678174792779},//bus 50, 148, 07, 59
            'cuoi_cong_vien_gia_dinh' : { name: 'Cuối Công viên Gia Định', lat: 10.810502834473013, lng: 106.67538061382992},//bus 55, 148, 07, 59, 03, 50
            'cho_thai_binh' : {name: 'Chợ Thái Bình', lat: 10.76688613154014, lng: 106.68766070067551}, // bus 27, 53
            'cong_quynh' : { name: 'Cống Quỳnh', lat: 10.764124649679731, lng: 106.6904609268451},//bus 45, 56
            'cho_da_kao' : { name: 'Chợ Đa Kao', lat: 10.79236326134938, lng: 106.69452296633811}, //bus 31, 36
            'cau_ong_tranh': {name: 'Cầu Ông Tranh', lat: 10.790289827203294, lng: 106.74228512723585}, //bus 43, 88, 157
            'cho_bau_cat' : { name: 'Chợ Bàu Cát', lat: 10.790730266898995, lng: 106.64011665343295}, //bus 23
            'giao_lo_ham_nghi_ton_that_dam': { name: 'Giao lộ Hàm Nghi - Tôn Thất Đạm', lat: 10.770865408835054, lng: 106.70295394232825}, //bus 01, 0319, 20, 45, 53, 56, 75, 88
            'cong_truoc_svd_quan_khu_7': {name: 'Cổng trước SVĐ Quân khu 7', lat: 10.80092878470623, lng: 106.66680286236365}, //bus 04, 07, 08, 63-1, 64, 104, 109, 152
            'dai_hoc_kinh_te': {name: 'Đại học Kinh tế', lat: 10.784088106139713, lng: 106.69451274849074}, //bus 30, 36
            'den_tho_an_giao_pasteur': { name: 'Đền thờ Ấn Giáo Pasteur', lat: 10.773541489385218, lng: 106.70137806617105}, //bus 04, 18, 31, 36, 52, 93, 109, 152, 155
            'den_tran_hung_dao': { name: 'Đền Trần Hưng Đạo', lat: 10.791221310016576, lng: 106.6951116666943},//bus 10, 18, 91
            'cau_kieu': {name: 'Cầu Kiệu', lat: 10.793663573108507, lng: 106.68475215727197},//bus 03
            'vong_xoay_kinh_duong_vuong': {name: 'Vòng xoay Kinh Dương Vương', lat: 10.745001689084065, lng: 106.62235765228641}, //bus 09, 10, 14, 25, 32, 61, 62-1, 62-2, 62-8, 62-10, 63-1, 84, 91, 139, 148
            'cau_dien_bien_phu': {name: 'Cầu Điện Biên Phủ', lat:10.795087657183107, lng: 106.70165591342678}, //bus 10, 45, 72-1, 93, 150
            'benh_vien_gia_dinh': { name: 'Bệnh viện Gia Định', lat: 10.803208837547032, lng: 106.69346900849965},//bus 08, 55, 964, 104, 146 
            'cau_binh_loi': { name: 'Cầu Bình Lợi', lat: 10.823468183036187, lng: 106.70389559500747}, //bus 50
            'cau_go_dua': {name: 'Cầu Gò Dưa', lat: 10.839860738915961, lng: 106.74051826617186}, //bus 08, 50, 57, 93
            'dai_hoc_csnd': { name: 'Đại học CSND', lat: 10.860410612800923, lng: 106.75295811035147}, //bus 50
            'nghia_trang_thanh_pho': { name: 'Nghĩa trang Thành phố', lat: 10.87064702527621, lng: 106.77305783718398}, //bus: 19, 33, 50, 53, 60-1, 61-9, 63, 93
            'tram_cau_vuot_linh_xuan': { name: 'Trạm Cầu vượt Linh Xuân', lat: 10.871517239828485, lng: 106.76398425767175}, //bus 50, 53, 93
            'ktx_khu_a_dhqg': { name: 'Ký túc xá khu A ĐHQG', lat: 10.87572099477207, lng: 106.8048627932484}, //bus 08, 10, 19, 50, 52, 61-05, 61-77, 99, 166
            'ktx_khu_b_dhqg': { name: 'Ký túc xá khu B ĐHQG', lat: 10.88174462470549, lng: 106.78313734044791}, //bus 53, 60-5, 99 
            'ktx_dai_hoc_su_pham_ky_thuat': { name: 'Ký túc xá Đại học Sư phạm Kỹ thuật', lat: 10.846082863492763, lng: 106.79757027116412}, //bus 56, 99, 141
            'nga_3_my_thanh': {name: 'Ngã 3 Mỹ Thành', lat: 10.851428479264984, lng: 106.81373679111114}, //bus 56, 99
            'tram_y_te_phuong_tan_phu': { name: 'Trạm y tế phường Tân Phú', lat: 10.860321370778259, lng: 106.799369296916}, //bus 99, 164, 164D
            'nha_khach_dhqg': { name: 'Nhà khách ĐHQG', lat: 10.881109935132026, lng: 106.79558639134396}, //bus: 53, 60-5, 99
            'nha_tho_nam_hai': { name: 'Nhà thờ Nam Hải', lat: 10.737722568060278, lng: 106.67085989500649}, // bus 59
            'benh_vien_nguyen_tri_phuong_nt': { name: 'Bệnh viên Nguyễn Tri Phương', lat: 10.755605143797489, lng: 106.66959092622825},// bus 59, 68
            'benh_vien_nguyen_tri_phuong_adv': { name: 'Bệnh viện Nguyễn Tri Phương', lat: 10.756859443223298, lng: 106.67047069076983}, //bus 06, 56, 139
            'benh_vien_nguyen_trai': { name: 'Bệnh viện Nguyễn Trãi', lat: 10.75612162064948, lng: 106.67532012467039}, //bus 68
            'cho_nhat_tao_ntp': { name: 'Chợ Nhật Tảo', lat: 10.765406653556083, lng: 106.66773553682647}, //bus 07, 10, 59
            'cho_nhat_tao_ltk': { name: 'Chợ Nhật Tảo', lat: 10.761498860334761, lng: 106.66055186903996}, //bus 08, 63-1, 94
            'cau_an_loc': { name: 'Cầu An Lộc', lat: 10.849348856512362, lng: 106.67882398151548}, //bus: 03, 32, 59, 161
            'nga_tu_hoc_mon': { name: 'Ngã tư Hóc Môn', lat: 10.885015241248551, lng: 106.58786436802353}, //bus 13, 24, 74, 94
            'bao_tang_phu_nu': {name: 'Bảo tàng Phụ nữ', lat: 10.7839291373231, lng: 106.68783211035057}, //bus 10, 28, 30, 91
            'nha_tho_ba_chuong': {name: 'Nhà thờ Ba Chuông', lat: 10.793452230972047, lng: 106.66976199500712}, //bus 28
            'mui_tau_cong_hoa': { name: 'Mũi tàu Cộng Hoà', lat: 10.808438528423407, lng: 106.63468815267909}, //bus 04, 13, 16, 23, 27, 28, 62, 63-1, 65, 94, 104, 145
            'khu_cong_nghiep_tan_binh': { name: 'Khu công nghiệp Tân Bình', lat: 10.82261434235154, lng: 106.63032520414284}, //bus: 04, 13, 23, 27, 32, 41, 62, 65, 94, 104, 145
            'cong_khu_cong_nghiep_tan_binh': { name: 'Cổng Khu công nghiệp Tân Bình', lat: 10.819338032375608, lng: 106.62914889396032}, //bus: 28, 32, 41
            'tram_kenh_19_5': { name: 'Trạm Kênh 19/5', lat: 10.808945653337497, lng: 106.61590147237821}, //bus 28, 48, 69
            'thep_quoc_thai': { name: 'Thép Quốc Thái', lat: 10.814980569716054, lng: 106.5839155526791}, //bus 28, 48
            'sieu_thi_maximart_cong_hoa': { name: 'Siêu thị Maximart Cộng Hoà', lat: 10.800923109667458, lng: 106.65941007966372}, //bus 04, 28, 63-1, 104, 109, 145
            'benh_vien_phuoc_an': { name: 'Bệnh viện Phước An', lat: 10.803778362752482, lng: 106.68832099077042}, //bus: 08, 55, 64, 104
            'bao_tang_mien_dong': { name: 'Bảo tàng Miền Đông', lat: 10.800405787539855, lng: 106.66633320849954}, //bus 04, 08, 63-1, 64, 72-2B, 104, 109, 152
            'cho_phu_tho': { name: 'Chợ Phú Thọ', lat: 10.762541088756128, lng: 106.6537190618576}, //bus: 23, 62
            'benh_vien_tan_phu': { name: 'Bệnh viện Tân Phú', lat: 10.783206055990314, lng: 106.64268437966356}, //bus 23, 27
            'nga_ba_truong_chinh': { name: 'Ngã ba Trường Chinh', lat: 10.797185650672589, lng: 106.64401090796497}, //bus 23, 64
            'cho_ba_diem': { name: 'Chợ Bà Điểm', lat: 10.840104937175058, lng: 106.59965957966422}, //bus 23, 48, 71
            'cho_xuan_thoi_thuong': { name: 'Chợ Xuân Thới Thượng', lat: 10.863542403482887, lng: 106.56936277542778}, // bus 23
            'truong_ptth_nguyen_van_cu': { name: 'Trường PTTH Nguyễn Văn Cừ', lat: 10.86970548897652, lng: 106.55122107357664}, //bus 23, 62-5, 78, 85
            'ben_xe_buyt_cau_lon': { name: 'Bến xe buýt Cầu Lớn', lat: 10.87202406955144, lng: 106.53619672516055}, //bus 23, 62-5, 78, 85
            'so_y_te': {name: 'Sở Y tế', lat: 10.774435796993197, lng: 106.6902866976009}, //bus 05, 06, 14, 28
            'nga_ba_mui_tau_duong_go_dua': { name: 'Ngã ba Mũi tàu đường Gò Dưa', lat: 10.86711159099385, lng: 106.72752838336679},// bus 05, 19, 29, 33, 60-1, 91
            'cau_vuot_song_than': { name: 'Cầu vượt Sóng Thần', lat: 10.874113955763274, lng: 106.74720475767175}, //05, 19, 33, 60-1
            'chua_tu_quang': { name: 'Chùa Từ Quang', lat: 10.885599418707976, lng: 106.77256969871047}, //bus 05, 167, 167D
            'ben_xe_bien_hoa': { name: 'Bến xe Biên Hoà', lat: 10.954500900228318, lng: 106.80947870740444}, //bus 05, 60-1, 60-5, 60-7
            'truong_trung_hoc_gia_dinh': { name: 'Trường Trung học Gia Định', lat: 10.799049546925698, lng: 106.71126224870953}, //bus 05, 06, 14, 19, 44, 52
            'cho_kien_duc': { name: 'Chợ Kiến Đức', lat: 10.716007563891704, lng: 106.61930762089682}, //bus 15, 101
            'ben_phu_dinh': {name: 'Bến Phú Định', lat: 10.711650443903828, lng: 106.61899405158378}, //bus 15, 101
            'tram_dien_quoc_lo_1a': { name: 'Trạm điện Quốc lộ 1A', lat: 10.738102362955964, lng: 106.60168590426204}, //bus 15, 60-1, 151
            'kcn_tan_tao': { name: 'KCN Tân Tạo', lat: 10.75247278203164, lng: 106.59331043494917}, //bus 15, 60-1, 151
            'benh_vien_binh_tan': { name: 'Bệnh viện Bình Tân', lat: 10.767269128405998, lng: 106.59750255425675}, //bus 15
            'thuy_ta': { name: 'Thuỷ Tạ', lat: 10.769548490029687, lng: 106.63793992368142}, //bus 15, 23, 62, 64, 69
            'khu_che_xuat_tan_thuan': { name: 'Khu chế xuất Tân Thuận', lat: 10.752988071436176, lng: 106.72663526300069}, //bus 20, 34, 68, 75
            'cau_phu_my': {name: 'Cầu Phú Mỹ', lat: 10.736691637696865, lng: 106.73037066254646}, //bus 20, 75
            'go_o_moi': { name: 'Gò Ô Môi', lat: 10.728708142290474, lng: 106.73260198465654}, //bus 20, 75
            'truong_ngo_quyen_q7': { name: 'Trường Ngô Quyền', lat: 10.71275330344198, lng: 106.73695416071531}, //bus 20, 75, 139
            'pham_huu_lau': { name: 'Phạm Hữu Lầu', lat: 10.70580712654153, lng: 106.73740555357634}, //bus 20, 75, 139
            'cho_phu_xuan': {name: 'Chợ Phú Xuân', lat: 10.701114527503618, lng: 106.73816672583246}, //bus 20, 75, 110 
            'chua_la': { name: 'Chùa Lá', lat: 10.68995803175323, lng: 106.74190624480643}, //bus 20, 75, 110
            'ben_xe_buyt_binh_khanh': { name: 'Bến xe buýt Bình Khánh', lat: 10.674396341193447, lng: 106.76621608524323}, //bus 20
            'benh_vien_trieu_an': { name: 'Bệnh viện Triều An', lat: 10.739677861968284, lng: 106.61636873062972}, //bus 09, 102, 151, 25, 39, 41, 60-1, 61, 62-1, 62-10, 62-2, 62-8, 63-1, 84
            'nut_giao_binh_thuan': { name: 'Nút giao Bình Thuận', lat: 10.691882231518589, lng: 106.59603463892219}, //bus 09, 102, 22, 62-1, 62-10, 62-2, 62-8, 63-1
            'cho_binh_dien': { name: 'Chợ Bình Điền', lat: 10.702172996129239, lng: 106.60838715619282}, //bus 22, 102
            'cau_can_giuoc': { name: 'Cầu Cần Giuộc', lat: 10.696798885100831, lng: 106.61827077479329}, //bus 22, 102
            'cau_ba_lon': { name: 'Cầu Bà Lớn', lat: 10.711615341191314, lng: 106.64640891782996}, //bus 22, 45, 102, 140
            'dai_hoc_rmit': { name: 'Đại học RMIT', lat: 10.728995842195197, lng: 106.69591530248871}, //bus 34, 102
            'sky_garden': { name: 'Sky Garden', lat: 10.729357213543189, lng: 106.70501484105453}, //bus 34, 68, 102
            'nguyen_luong_bang': { name: 'Nguyễn Lương Bằng', lat: 10.729353616688847, lng: 106.7127842495291}, //bus 34, 102
            'cau_ly_phuc_man': { name: 'Cầu Lý Phục Man', lat: 10.742761814357307, lng: 106.72145314911555}, //bus 31, 102
            'nga_4_tay_hoa': { name: 'Ngã 4 Tây Hoà', lat: 10.825954792834327, lng: 106.76091921044694}, //bus 06, 10, 150, 52, 53, 56, 60-3, 67, 99
            'nga_ba_my_thanh': { name: 'Ngã ba Mỹ Thành', lat: 10.85134295682984, lng: 106.81360753439964}, //bus 56, 99
            'cau_tham_luong': { name: 'Cầu Tham Lương - Siêu thị Thiên Hòa', lat: 10.826839577572022, lng: 106.62654594857261}, //bus 04, 13, 23, 27, 41, 62, 65, 94, 104, 145
            'nga_ba_ap_bac': { name: 'Ngã ba Ấp Bắc', lat: 10.799899506713158, lng: 106.64097928160601}, //bus 13, 23, 65, 94
        };

        // Định nghĩa các cạnh (kết nối giữa các trạm) với khoảng cách (km)
        const edges = [
            //Tuyến 01
            { from: 'cong_truong_me_linh', to: 'ben_bach_dang', distance: 0.417},
            { from: 'ben_bach_dang', to: 'cho_cu', distance: 0.619},
            { from: 'cho_cu', to: 'cao_thang', distance: 0.137},
            { from: 'cao_thang', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.255},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'truong_ernst_thalmann', distance: 0.522},
            { from: 'truong_ernst_thalmann', to: 'cho_nanci', distance: 1.7},
            { from: 'cho_nanci', to: 'tran_binh_trong', distance: 0.787},
            { from: 'tran_binh_trong', to: 'nha_van_hoa_quan_5', distance: 1.4},
            { from: 'nha_van_hoa_quan_5', to: 'hai_thuong_lan_ong', distance: 1.4},
            { from: 'hai_thuong_lan_ong', to: 'cho_kim_bien', distance: 0.376},
            { from: 'cho_kim_bien', to: 'ben_xe_buyt_cho_lon', distance: 0.323},
            
            //Tuyến 03
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.691},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.12},
            { from: 'nam_ky_khoi_nghia', to: 'cho_cu', distance: 0.07},
            { from: 'cho_cu', to: 'giao_lo_ham_nghi_ton_that_dam', distance: 0.114},
            { from: 'giao_lo_ham_nghi_ton_that_dam', to: 'ben_bach_dang', distance: 0.942},
            { from: 'ben_bach_dang', to: 'cong_truong_me_linh', distance: 0.312},
            { from: 'cong_truong_me_linh', to: 'nha_hat_thanh_pho', distance: 0.348},
            { from: 'nha_hat_thanh_pho', to: 'benh_vien_nhi_dong_2', distance: 0.314},
            { from: 'benh_vien_nhi_dong_2', to: 'buu_dien_thanh_pho', distance: 0.138},
            { from: 'buu_dien_thanh_pho', to: 'cong_vien_le_van_tam', distance: 1.2},
            { from: 'cong_vien_le_van_tam', to: 'nha_tho_tan_dinh', distance: 0.322},
            { from: 'nha_tho_tan_dinh', to: 'cho_tan_dinh', distance: 0.234},
            { from: 'cho_tan_dinh', to: 'cau_kieu', distance: 0.579},
            { from: 'cau_kieu', to: 'cho_phu_nhuan', distance: 0.263},
            { from: 'cho_phu_nhuan', to: 'nga_tu_phu_nhuan', distance: 0.65},
            { from: 'nga_tu_phu_nhuan', to: 'nga_ba_ho_van_hue', distance: 0.671},
            { from: 'nga_ba_ho_van_hue', to: 'chua_van_hanh', distance: 0.603},
            { from: 'chua_van_hanh', to: 'nga_ba_pham_ngu_lao', distance: 1.3},
            { from: 'nga_ba_pham_ngu_lao', to: 'cau_vuot_nga_sau_go_vap', distance: 0.628},
            { from: 'cau_vuot_nga_sau_go_vap', to: 'nga_tu_phan_van_tri', distance: 1},
            { from: 'nga_tu_phan_van_tri', to: 'nga_tu_an_nhon', distance: 1.2},
            { from: 'nga_tu_an_nhon', to: 'nga_tu_ga', distance: 1.8},
            { from: 'nga_tu_ga', to: 'cho_thanh_xuan', distance: 2.6},
            { from: 'cho_thanh_xuan', to: 'cho_duong', distance: 2.6},
            { from: 'cho_duong', to: 'thanh_xuan', distance: 2.0},
            
            //Tuyến 04
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.742},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.06},
            { from: 'nam_ky_khoi_nghia', to: 'cho_cu', distance: 0.07},
            { from: 'cho_cu', to: 'den_tho_an_giao_pasteur', distance: 0.397},
            { from: 'den_tho_an_giao_pasteur', to: 'nguyen_thi_minh_khai', distance: 0.904},
            { from: 'nguyen_thi_minh_khai', to: 'dai_hoc_kien_truc', distance: 0.327},
            { from: 'dai_hoc_kien_truc', to: 'dien_bien_phu', distance: 0.279},
            { from: 'dien_bien_phu', to: 'nha_thieu_nhi_thanh_pho', distance: 0.48},
            { from: 'nha_thieu_nhi_thanh_pho', to: 'trung_tam_van_hoa_quan_phu_nhuan', distance: 2.0},
            { from: 'trung_tam_van_hoa_quan_phu_nhuan', to: 'benh_vien_quan_phu_nhuan', distance: 0.698},
            { from: 'benh_vien_quan_phu_nhuan', to: 'vong_xoay_lang_cha_ca', distance: 1.1},
            { from: 'vong_xoay_lang_cha_ca', to: 'nga_tu_hoang_hoa_tham', distance: 1.8},
            { from: 'nga_tu_hoang_hoa_tham', to: 'nga_ba_binh_gia', distance: 0.278},
            { from: 'nga_ba_binh_gia', to: 'mui_tau_cong_hoa', distance: 1.4},
            { from: 'mui_tau_cong_hoa', to: 'nga_ba_che_lan_vien', distance: 0.465},
            { from: 'nga_ba_che_lan_vien', to: 'khu_cong_nghiep_tan_binh', distance: 1.2},
            { from: 'khu_cong_nghiep_tan_binh', to: 'ben_xe_an_suong', distance: 3.3},
            
            //Tuyến 06
            { from: 'ben_xe_buyt_cho_lon', to: 'ben_xe_cho_lon', distance: 0.65},
            { from: 'ben_xe_cho_lon', to: 'benh_vien_cho_ray', distance: 0.795},
            { from: 'benh_vien_cho_ray', to: 'benh_vien_nguyen_tri_phuong_adv', distance: 1.3},
            { from: 'benh_vien_nguyen_tri_phuong_adv', to: 'cho_an_dong', distance: 0.191},
            { from: 'cho_an_dong', to: 'cho_bau_sen', distance: 0.752},
            { from: 'cho_bau_sen', to: 'dai_hoc_sai_gon', distance: 0.466},
            { from: 'dai_hoc_sai_gon', to: 'dai_hoc_khoa_hoc_tu_nhien', distance: 0.274},
            { from: 'dai_hoc_khoa_hoc_tu_nhien', to: 'benh_vien_tu_du', distance: 0.93},
            { from: 'benh_vien_tu_du', to: 'nha_van_hoa_lao_dong', distance: 1.3},
            { from: 'nha_van_hoa_lao_dong', to: 'pasteur', distance: 0.593},
            { from: 'pasteur', to: 'thao_cam_vien', distance: 1.3},
            { from: 'thao_cam_vien', to: 'truong_trung_hoc_gia_dinh', distance: 1.4},
            { from: 'truong_trung_hoc_gia_dinh', to: 'dai_hoc_hutech', distance: 0.565},
            { from: 'dai_hoc_hutech', to: 'cau_sai_gon', distance: 0.665},
            { from: 'cau_sai_gon', to: 'thao_dien', distance: 2.2},
            { from: 'thao_dien', to: 'nga_4_tay_hoa', distance: 4.2},
            { from: 'nga_4_tay_hoa', to: 'lang_thieu_nien_thu_duc', distance: 3.6},
            { from: 'lang_thieu_nien_thu_duc', to: 'nga_ba_chuong_duong', distance: 0.324},
            { from: 'nga_ba_chuong_duong', to: 'truong_dhsp_ky_thuat', distance: 1.3},
            { from: 'truong_dhsp_ky_thuat', to: 'khu_cong_nghe_cao_q9', distance: 2.2},
            { from: 'khu_cong_nghe_cao_q9', to: 'dai_hoc_nong_lam', distance: 2.1},
            { from: 'dai_hoc_nong_lam', to: 'ben_xe_buyt_dai_hoc_nong_lam', distance: 0.469},     

            //Tuyến 07
            { from: 'ben_xe_buyt_cho_lon', to: 'cho_kim_bien', distance: 0.756},
            { from: 'cho_kim_bien', to: 'benh_vien_cho_ray', distance: 0.998},
            { from: 'benh_vien_cho_ray', to: 'dai_hoc_y_duoc', distance: 0.443},
            { from: 'dai_hoc_y_duoc', to: 'cong_vien_van_lang', distance: 0.78},
            { from: 'cong_vien_van_lang', to:  'dai_hoc_kinh_te_q10', distance: 0.531},
            { from: 'dai_hoc_kinh_te_q10', to: 'hoc_vien_quan_y', distance: 0.644},
            { from: 'hoc_vien_quan_y', to: 'benh_vien_nhi_dong_1', distance: 0.494},
            { from: 'benh_vien_nhi_dong_1', to: 'nha_hat_hoa_binh', distance: 0.547},
            { from: 'nha_hat_hoa_binh', to: 'vong_xoay_dan_chu', distance: 1.3},
            { from: 'vong_xoay_dan_chu', to: 'ga_sai_gon', distance: 0.65},
            { from: 'ga_sai_gon', to: 'cho_nguyen_van_troi', distance: 1.5},
            { from: 'cho_nguyen_van_troi', to: 'nga_tu_nguyen_van_troi', distance: 0.794},
            { from: 'nga_tu_nguyen_van_troi', to: 'trung_tam_van_hoa_quan_phu_nhuan', distance: 0.385},
            { from: 'trung_tam_van_hoa_quan_phu_nhuan', to: 'benh_vien_quan_phu_nhuan', distance: 0.698},
            { from: 'benh_vien_quan_phu_nhuan', to: 'rap_tan_son_nhat', distance: 0.785},
            { from: 'rap_tan_son_nhat', to: 'cuoi_cong_vien_gia_dinh', distance: 1.7},
            { from: 'cuoi_cong_vien_gia_dinh', to: 'dau_cong_vien_gia_dinh', distance: 0.552},
            { from: 'dau_cong_vien_gia_dinh', to: 'nga_ba_pham_ngu_lao', distance: 1.1},
            { from: 'nga_ba_pham_ngu_lao', to: 'bai_hau_can_so_1', distance: 1.3},

            //Tuyến 08 
            { from: 'ben_xe_buyt_quan_8', to: 'cau_nhi_thien_duong', distance: 0.711},
            { from: 'cau_nhi_thien_duong', to: 'tung_thien_vuong', distance: 0.741},
            { from: 'tung_thien_vuong', to: 'cho_xom_cui', distance: 0.384},
            { from: 'cho_xom_cui', to: 'buu_dien_quan_5', distance: 1.1},
            { from: 'buu_dien_quan_5', to: 'rap_dai_quang', distance: 0.153},
            { from: 'rap_dai_quang', to: 'benh_vien_cho_ray', distance: 0.318},
            { from: 'benh_vien_cho_ray', to: 'nha_thi_dau_phu_tho', distance: 1.8},
            { from: 'nha_thi_dau_phu_tho', to: 'benh_vien_trung_vuong', distance: 0.275},
            { from: 'benh_vien_trung_vuong', to: 'dai_hoc_bach_khoa', distance: 0.367},
            { from: 'dai_hoc_bach_khoa', to: 'buu_dien_phu_tho', distance: 0.474},
            { from: 'buu_dien_phu_tho', to: 'nga_ba_thanh_thai', distance: 0.29},
            { from: 'nga_ba_thanh_thai', to: 'cho_tan_binh', distance: 0.905},
            { from: 'cho_tan_binh', to: 'benh_vien_thong_nhat_ltk', distance: 0.712},
            { from: 'benh_vien_thong_nhat_ltk', to: 'benh_vien_quan_tan_binh', distance: 0.385},
            { from: 'benh_vien_quan_tan_binh', to: 'cong_vien_hoang_van_thu', distance: 1.2},
            { from: 'cong_vien_hoang_van_thu', to: 'bao_tang_mien_dong', distance: 0.325},
            { from: 'bao_tang_mien_dong', to: 'nga_tu_phu_nhuan', distance: 1.5},
            { from: 'nga_tu_phu_nhuan', to: 'nga_tu_phan_xich_long', distance: 0.326},
            { from: 'nga_tu_phan_xich_long', to: 'nga_tu_thich_quang_duc', distance: 0.372},
            { from: 'nga_tu_thich_quang_duc', to: 'dai_hoc_van_hien_phu_nhuan', distance: 0.294},
            { from: 'dai_hoc_van_hien_phu_nhuan', to: 'cong_vien_van_hoa_phu_nhuan', distance: 0.52},
            { from: 'cong_vien_van_hoa_phu_nhuan', to: 'lang_ong_ba_chieu', distance: 0.782},
            { from: 'lang_ong_ba_chieu', to: 'cho_ba_chieu', distance: 0.281},
            { from: 'cho_ba_chieu', to: 'cho_hang_xanh', distance: 1.3},
            { from: 'cho_hang_xanh', to: 'nga_ba_hang_xanh', distance: 0.164},
            { from: 'nga_ba_hang_xanh', to: 'nga_tu_binh_trieu', distance: 2.8},
            { from: 'nga_tu_binh_trieu', to: 'chua_uu_dam', distance: 1.2},
            { from: 'chua_uu_dam', to: 'cau_go_dua', distance: 2.1},
            { from: 'cau_go_dua', to: 'nga_tu_to_ngoc_van_pham_van_dong', distance: 1.8},
            { from: 'nga_tu_to_ngoc_van_pham_van_dong', to: 'cho_thu_duc', distance: 0.673},
            { from: 'cho_thu_duc', to: 'nga_ba_chuong_duong', distance: 0.81},
            { from: 'nga_ba_chuong_duong', to: 'truong_dhsp_ky_thuat', distance: 1.3},
            { from: 'truong_dhsp_ky_thuat', to: 'khu_cong_nghe_cao_q9', distance: 2.3},
            { from: 'khu_cong_nghe_cao_q9', to: 'suoi_tien', distance: 1.7},
            { from: 'suoi_tien', to: 'nghia_trang_liet_si_tphcm', distance: 1.2},
            { from: 'nghia_trang_liet_si_tphcm', to: 'nha_van_hoa_sinh_vien', distance: 1.6},
            { from: 'nha_van_hoa_sinh_vien', to: 'dai_hoc_khoa_hoc_xa_hoi_va_nhan_van', distance: 0.291},
            { from: 'dai_hoc_khoa_hoc_xa_hoi_va_nhan_van', to: 'ben_xe_buyt_dhqg_moi', distance: 0.853},
            
            //Tuyến 13
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'khach_san_new_world_pht', distance: 0.82},
            { from: 'khach_san_new_world_pht', to: 'trong_dong', distance: 0.625},
            { from: 'trong_dong', to: 'vo_van_tan', distance: 0.256},
            { from: 'vo_van_tan', to: 'cong_truong_dan_chu', distance: 0.85},
            { from: 'cong_truong_dan_chu', to: 'nga_ba_chi_hoa', distance: 0.809},
            { from: 'nga_ba_chi_hoa', to: 'chua_buu_da', distance: 0.218},
            { from: 'chua_buu_da', to: 'rap_hat_thanh_van', distance: 0.51},
            { from: 'rap_hat_thanh_van', to: 'cho_hoa_hung', distance: 0.112},
            { from: 'cho_hoa_hung', to: 'cong_vien_le_thi_rieng', distance: 0.39},
            { from: 'cong_vien_le_thi_rieng', to: 'nga_ba_banh_van_tran', distance: 0.713},
            { from: 'nga_ba_banh_van_tran', to: 'ong_ta', distance: 0.233},
            { from: 'ong_ta', to: 'benh_vien_thong_nhat', distance: 0.731},
            { from: 'benh_vien_thong_nhat', to: 'benh_vien_quan_tan_binh', distance: 0.328},
            { from: 'benh_vien_quan_tan_binh', to: 'nga_tu_bay_hien', distance: 0.839},
            { from: 'nga_tu_bay_hien', to: 'nga_ba_hoang_hoa_tham', distance: 0.461},
            { from: 'nga_ba_hoang_hoa_tham', to: 'nga_ba_binh_gia', distance: 0.424},
            { from: 'nga_ba_binh_gia', to: 'nga_ba_ap_bac', distance: 0.438},
            { from: 'nga_ba_ap_bac', to: 'cho_vo_thanh_trang', distance: 0.413},
            { from: 'cho_vo_thanh_trang', to: 'nga_tu_tan_ky_tan_quy', distance: 0.497},
            { from: 'nga_tu_tan_ky_tan_quy', to: 'mui_tau_cong_hoa', distance: 0.448},
            { from: 'mui_tau_cong_hoa', to: 'nga_ba_che_lan_vien', distance: 0.465},
            { from: 'nga_ba_che_lan_vien', to: 'khu_cong_nghiep_tan_binh', distance: 1.2},
            { from: 'khu_cong_nghiep_tan_binh', to: 'chua_vinh_phuoc', distance: 0.97},
            { from: 'chua_vinh_phuoc', to: 'bitis', distance: 1.3},
            { from: 'bitis', to: 'ben_xe_an_suong', distance: 1.1},
            { from: 'ben_xe_an_suong', to: 'trung_tam_van_hoa_quan_12', distance: 1.1},
            { from: 'trung_tam_van_hoa_quan_12', to: 'nga_ba_cu_cai', distance: 1.0},
            { from: 'nga_ba_cu_cai', to: 'nga_ba_bui_mon', distance: 1.1},
            { from: 'nga_ba_bui_mon', to: 'nga_tu_gieng_nuoc', distance: 1.1},
            { from: 'nga_tu_gieng_nuoc', to: 'nga_tu_hoc_mon', distance: 0.997},
            { from: 'nga_tu_hoc_mon', to: 'dan_thang', distance: 0.564},
            { from: 'dan_thang', to: 'nga_ba_lam_son', distance: 0.615},
            { from: 'nga_ba_lam_son', to: 'doanh_trai_quan_doi', distance: 0.349},
            { from: 'doanh_trai_quan_doi', to: 'nga_ba_hong_chau', distance: 0.569},
            { from: 'nga_ba_hong_chau', to: 'cau_an_ha', distance: 2.4},
            { from: 'cau_an_ha', to: 'benh_vien_xuyen_a', distance: 1.4},
            { from: 'benh_vien_xuyen_a', to: 'mui_tau_tinh_lo_2', distance: 1.3},
            { from: 'mui_tau_tinh_lo_2', to: 'nga_tu_quan_doi', distance: 3.1},
            { from: 'nga_tu_quan_doi', to: 'cau_vuot_cu_chi', distance: 4.7},
            { from: 'cau_vuot_cu_chi', to: 'ben_xe_cu_chi', distance: 0.883},
            
            //Tuyến 14
            { from: 'ben_xe_mien_dong', to: 'nga_nam_liet_si', distance: 0.75},
            { from: 'nga_nam_liet_si', to: 'cho_phuong_25', distance: 0.615},
            { from: 'cho_phuong_25', to: 'dai_hoc_gtvt', distance: 0.326},
            { from: 'dai_hoc_gtvt', to: 'dai_hoc_ngoai_thuong', distance: 0.21},
            { from: 'dai_hoc_ngoai_thuong', to: 'dai_hoc_hutech', distance: 0.468},
            { from: 'dai_hoc_hutech', to: 'nga_ba_nguyen_cuu_van', distance: 1.3},
            { from: 'nga_ba_nguyen_cuu_van', to: 'thao_cam_vien', distance: 0.703},
            { from: 'thao_cam_vien', to: 'dai_truyen_hinh', distance: 0.543},
            { from: 'dai_truyen_hinh', to: 'ho_con_rua', distance: 0.914},
            { from: 'ho_con_rua', to: 'bao_tang_chung_tich_chien_tranh', distance: 0.693},
            { from: 'bao_tang_chung_tich_chien_tranh', to: 'nguyen_thi_minh_khai', distance: 0.633},
            { from: 'nguyen_thi_minh_khai', to: 'benh_vien_tu_du', distance: 1.0},
            { from: 'benh_vien_tu_du', to: 'ho_thi_ky', distance: 1.3},
            { from: 'ho_thi_ky', to: 'cho_phuong_10', distance: 0.324},
            { from: 'cho_phuong_10', to: 'benh_vien_nhi_dong_1', distance: 0.379},
            { from: 'benh_vien_nhi_dong_1', to: 'nga_ba_nguyen_kim', distance: 0.99},
            { from: 'nga_ba_nguyen_kim', to: 'le_dai_hanh', distance: 0.748},
            { from: 'le_dai_hanh', to: 'vong_xoay_cay_go', distance: 1.6},
            { from: 'vong_xoay_cay_go', to: 'cau_ong_buong', distance: 0.964},
            { from: 'cau_ong_buong', to: 'vong_xoay_phu_lam', distance: 0.331},
            { from: 'vong_xoay_phu_lam', to: 'cong_vien_phu_lam', distance: 1.3},
            { from: 'cong_vien_phu_lam', to: 'vong_xoay_kinh_duong_vuong', distance: 0.302},
            { from: 'vong_xoay_kinh_duong_vuong', to: 'ben_xe_mien_tay', distance: 1.1},
            
            //Tuyến 19
            { from: 'ben_xe_buyt_dhqg_moi', to: 'nha_van_hoa_sinh_vien', distance: 1.2},
            { from: 'nha_van_hoa_sinh_vien', to: 'dai_hoc_an_ninh_nhan_dan', distance: 1.5},
            { from: 'dai_hoc_an_ninh_nhan_dan', to: 'khu_du_lich_suoi_tien', distance: 0.871},
            { from: 'khu_du_lich_suoi_tien', to: 'thao_nguyen', distance: 0.873},
            { from: 'thao_nguyen', to: 'dai_hoc_nong_lam', distance: 0.371},
            { from: 'dai_hoc_nong_lam', to: 'cau_vuot_linh_xuan', distance: 3.5},
            { from: 'cau_vuot_linh_xuan', to: 'ben_xe_lam_hong', distance: 0.781},
            { from: 'ben_xe_lam_hong', to: 'cho_tam_hai', distance: 1.3},
            { from: 'cho_tam_hai', to: 'cho_tam_binh', distance: 1.2},
            { from: 'cho_tam_binh', to: 'nga_nam_liet_si', distance: 8.0},
            { from: 'nga_nam_liet_si', to: 'dai_hoc_gtvt', distance: 0.942},
            { from: 'dai_hoc_gtvt', to: 'dai_hoc_ngoai_thuong', distance: 0.21},
            { from: 'dai_hoc_ngoai_thuong', to: 'dai_hoc_hutech', distance: 0.468},
            { from: 'dai_hoc_hutech', to: 'nga_ba_nguyen_cuu_van', distance: 1.3},
            { from: 'nga_ba_nguyen_cuu_van', to: 'thao_cam_vien', distance: 0.703},
            { from: 'thao_cam_vien', to: 'bao_tang_lich_su', distance: 0.64},
            { from: 'bao_tang_lich_su', to: 'benh_vien_nhi_dong_2', distance: 1.1},
            { from: 'benh_vien_nhi_dong_2', to: 'nha_hat_thanh_pho', distance: 0.275},
            { from: 'nha_hat_thanh_pho', to: 'cong_truong_me_linh', distance: 0.322},
            { from: 'cong_truong_me_linh', to: 'ben_bach_dang', distance: 0.37},
            { from: 'ben_bach_dang', to: 'cho_cu', distance: 0.616},
            { from: 'cho_cu', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.392},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'ben_xe_buyt_sai_gon', distance: 1.3},

            //Tuyến 31
            { from: 'dai_hoc_ton_duc_thang', to: 'dai_hoc_canh_sat', distance: 0.224},
            { from: 'dai_hoc_canh_sat', to: 'cau_da_khoa', distance: 3.2},
            { from: 'cau_da_khoa', to: 'cau_ly_phuc_man', distance: 0.369},
            { from: 'cau_ly_phuc_man', to: 'cang_sai_gon', distance: 2.5},
            { from: 'cang_sai_gon', to: 'cho_xom_chieu', distance: 1.4},
            { from: 'cho_xom_chieu', to: 'cau_ong_lanh', distance: 1.6},
            { from: 'cau_ong_lanh', to: 'nguyen_kim', distance: 0.304},
            { from: 'nguyen_kim', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.719},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.067},
            { from: 'nam_ky_khoi_nghia', to: 'cho_cu', distance: 0.07},
            { from: 'cho_cu', to: 'pasteur', distance: 1.5},
            { from: 'pasteur', to: 'cong_vien_le_van_tam', distance: 1.1},
            { from: 'cong_vien_le_van_tam', to: 'nha_tho_tan_dinh', distance: 0.322},
            { from: 'nha_tho_tan_dinh', to: 'cho_tan_dinh', distance: 0.234},
            { from: 'cho_tan_dinh', to: 'cho_da_kao', distance: 0.991},
            { from: 'cho_da_kao', to: 'lang_ong_ba_chieu', distance: 1.1},
            { from: 'lang_ong_ba_chieu', to: 'nha_tho_binh_hoa', distance: 1.2},
            { from: 'nha_tho_binh_hoa', to: 'nga_nam_binh_hoa', distance: 0.293},
            { from: 'nga_nam_binh_hoa', to: 'nha_van_hoa_lao_dong', distance: 0.554},
            { from: 'nha_van_hoa_lao_dong', to: 'cau_binh_loi_bus31', distance: 1.4},
            { from: 'cau_binh_loi_bus31', to: 'cong_vien_dang_thuy_tram', distance: 3.5},
            
            //Tuyến 34
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.788},
            { from: 'truong_emst_thalmann', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.752},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'bao_tang_my_thuat', distance: 0.297},
            { from: 'bao_tang_my_thuat', to: 'cho_xom_chieu', distance: 1.3},
            { from: 'cho_xom_chieu', to: 'buu_dien_quan_4', distance: 0.25},
            { from: 'buu_dien_quan_4', to: 'dai_hoc_nguyen_tat_thanh', distance: 0.315},
            { from: 'dai_hoc_nguyen_tat_thanh', to: 'cang_sai_gon', distance: 0.889},
            { from: 'cang_sai_gon', to: 'san_bong_da_clb_cang_sg', distance: 1.0},
            { from: 'san_bong_da_clb_cang_sg', to: 'truong_mn_tan_thuan_tay', distance: 0.303},
            { from: 'truong_mn_tan_thuan_tay', to: 'cu_xa_ngan_hang', distance: 0.345},
            { from: 'cu_xa_ngan_hang', to: 'nha_tho_thuan_phat', distance: 0.44},
            { from: 'nha_tho_thuan_phat', to: 'mieu_ba_co', distance: 0.277},
            { from: 'mieu_ba_co', to: 'nga_ba_tan_quy', distance: 0.881},
            { from: 'nga_ba_tan_quy', to: 'trung_tam_y_te_tan_quy', distance: 0.801},
            { from: 'trung_tam_y_te_tan_quy', to: 'cho_tan_quy', distance: 0.242},
            { from: 'cho_tan_quy', to: 'cho_chieu', distance: 0.816},
            { from: 'cho_chieu', to: 'cho_tan_my', distance: 1.6},
            { from: 'cho_tan_my', to: 'dai_hoc_rmit', distance: 3.4},
            { from: 'dai_hoc_rmit', to: 'cau_ong_be', distance: 1.3},
            { from: 'cau_ong_be', to: 'ben_xe_buyt_quan_8', distance: 3.8},           
            
            //Tuyến 36
            { from: 'ben_xe_buyt_thoi_an', to: 'ubnd_phuong_thoi_an', distance: 0.435},
            { from: 'ubnd_phuong_thoi_an', to: 'nha_tho_nu_vuong_hoa_binh', distance: 2.3},
            { from: 'nha_tho_nu_vuong_hoa_binh', to: 'cau_cut', distance: 0.446},
            { from: 'cau_cut', to: 'nha_tho_hop_an', distance: 0.929},
            { from: 'nha_tho_hop_an', to: 'nha_tho_ha_noi', distance: 0.498},
            { from: 'nha_tho_ha_noi', to: 'truong_dai_hoc_hong_bang', distance: 0.752},
            { from: 'truong_dai_hoc_hong_bang', to: 'nga_ba_nguyen_van_luong', distance: 0.631},
            { from: 'nga_ba_nguyen_van_luong', to: 'cho_thong_tay', distance: 0.337},
            { from: 'cho_thong_tay', to: 'nga_tu_nguyen_oanh', distance: 1.6},
            { from: 'nga_tu_nguyen_oanh', to: 'bai_hau_can_so_1', distance: 2.0},
            { from: 'bai_hau_can_so_1', to: 'cho_phan_van_tri', distance: 1.3},
            { from: 'cho_phan_van_tri', to: 'nha_tho_binh_hoa', distance: 0.396},
            { from: 'nha_tho_binh_hoa', to: 'benh_vien_gia_dinh', distance: 0.697},
            { from: 'benh_vien_gia_dinh', to: 'lang_ong_ba_chieu', distance: 0.401},
            { from: 'lang_ong_ba_chieu', to: 'cho_tan_dinh', distance: 1.9},
            { from: 'cho_tan_dinh', to: 'dien_bien_phu_q3', distance: 0.723},
            { from: 'dien_bien_phu_q3', to: 'nha_van_hoa_thanh_nien', distance: 0.565},
            { from: 'nha_van_hoa_thanh_nien', to: 'nha_tho_duc_ba', distance: 0.411},
            { from: 'nha_tho_duc_ba', to: 'pasteur', distance: 0.174},
            { from: 'pasteur', to: 'nam_ky_khoi_nghia', distance: 0.171},
            { from: 'nam_ky_khoi_nghia', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 1.0},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'ben_xe_buyt_sai_gon', distance: 1.3},
            
            //Tuyến 38
            { from: 'dau_ben_tan_quy', to: 'cau_kinh_te', distance: 1.8},
            { from: 'cau_kinh_te', to: 'chua_anh_linh', distance: 2.3},
            { from: 'chua_anh_linh', to: 'cao_thang', distance: 1.3},
            { from: 'cao_thang', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.22},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'trong_dong', distance: 1.1},
            { from: 'trong_dong', to: 'cach_mang_thang_8', distance: 0.243},
            { from: 'cach_mang_thang_8', to: 'benh_vien_tu_du', distance: 0.702},
            { from: 'benh_vien_tu_du', to: 'dai_hoc_khoa_hoc_tu_nhien', distance: 0.873},
            { from: 'dai_hoc_khoa_hoc_tu_nhien', to: 'dai_hoc_su_pham', distance: 0.336},
            { from: 'dai_hoc_su_pham', to: 'cho_bau_sen', distance: 0.478},
            { from: 'cho_bau_sen', to: 'benh_vien_30_4', distance: 0.638},
            { from: 'benh_vien_30_4', to: 'nga_tu_nguyen_chi_thanh', distance: 0.39},
            { from: 'nga_tu_nguyen_chi_thanh', to: 'benh_vien_nhi_dong_1', distance: 0.952},
            { from: 'benh_vien_nhi_dong_1', to: 'nha_tho_dong_tien', distance: 0.545},
            { from: 'nha_tho_dong_tien', to: 'benh_vien_115', distance: 0.348},
            { from: 'benh_vien_115', to: 'dai_hoc_bach_khoa_cong_sau', distance: 0.924},
            { from: 'dai_hoc_bach_khoa_cong_sau', to: 'benh_vien_trung_vuong_tht', distance: 0.329},
            { from: 'benh_vien_trung_vuong_tht', to: 'nha_thi_dau_phu_tho', distance: 0.306},
            { from: 'nha_thi_dau_phu_tho', to: 'vong_xoay_le_dai_hanh', distance: 0.81},
            { from: 'vong_xoay_le_dai_hanh', to: 'nga_tu_lac_long_quan', distance: 0.668},
            { from: 'nga_tu_lac_long_quan', to: 'tram_dang_kiem', distance: 0.702},
            { from: 'tram_dang_kiem', to: 'ben_xe_buyt_dam_sen', distance: 0.775},
          
            //Tuyến 39
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.807},
            { from: 'truong_emst_thalmann', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.768},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'bao_tang_my_thuat', distance: 0.308},
            { from: 'bao_tang_my_thuat', to: 'cho_dan_sinh', distance: 0.309},
            { from: 'cho_dan_sinh', to: 'cho_nga', distance: 0.918},
            { from: 'cho_nga', to: 'benh_vien_nhiet_doi', distance: 2.4},
            { from: 'benh_vien_nhiet_doi', to: 'cho_hoa_binh', distance: 0.25},
            { from: 'cho_hoa_binh', to: 'hai_thuong_lan_ong', distance: 1.6},
            { from: 'hai_thuong_lan_ong', to: 'cho_kim_bien', distance: 1.1},
            { from: 'cho_kim_bien', to: 'cau_lo_gom', distance: 3.1},
            { from: 'cau_lo_gom', to: 'cau_rach_cay', distance: 0.846},
            { from: 'cau_rach_cay', to: 'chua_sung_quang', distance: 2.7},
            { from: 'chua_sung_quang', to: 'hang_duong', distance: 0.737},
            { from: 'hang_duong', to: 'ben_xe_mien_tay', distance: 2.4},
            
            //Tuyến 44 
            { from: 'ben_xe_buyt_kho_muoi', to: 'ton_dan', distance: 0.599},
            { from: 'ton_dan', to: 'truong_chinh_tri_q4', distance: 0.976},
            { from: 'truong_chinh_tri_q4', to: 'le_thi_hong_gam', distance: 1.6},
            { from: 'le_thi_hong_gam', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.584},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'chua_ba_an', distance: 1.0},
            { from: 'chua_ba_an', to: 'thu_vien_khoa_hoc_tong_hop', distance: 0.596},
            { from: 'thu_vien_khoa_hoc_tong_hop', to: 'so_tai_nguyen_moi_truong', distance: 0.266},
            { from: 'so_tai_nguyen_moi_truong', to: 'bv_nhi_dong_2_ltt', distance: 0.556},
            { from: 'bv_nhi_dong_2_ltt', to: 'ba_son', distance: 0.750},
            { from: 'ba_son', to: 'mam_non_hoa_lu', distance: 0.523},
            { from: 'mam_non_hoa_lu', to: 'cau_vuot_thu_thiem', distance: 1.5},
            { from: 'cau_vuot_thu_thiem', to: 'dh_ton_duc_thang', distance: 0.37},
            { from: 'dh_ton_duc_thang', to: 'truong_trung_hoc_gia_dinh', distance: 0.752},
            { from: 'truong_trung_hoc_gia_dinh', to: 'nga_ba_hang_xanh', distance: 0.508 },
            { from: 'nga_ba_hang_xanh', to: 'chua_buu_lien', distance: 0.953},
            { from: 'chua_buu_lien', to: 'chung_cu_thanh_da', distance: 1.3},
            { from: 'chung_cu_thanh_da', to: 'cho_binh_quoi', distance: 1.8},
            { from: 'cho_binh_quoi', to: 'ben_do_binh_quoi', distance: 1.0},
            
            //Tuyến 45
            { from: 'ben_xe_mien_dong', to: 'dai_hoc_gtvt', distance: 1.7},
            { from: 'dai_hoc_gtvt', to: 'dai_hoc_hutech', distance: 0.650},
            { from: 'dai_hoc_hutech', to: 'vong_xoay_hang_xanh', distance: 0.585},
            { from: 'vong_xoay_hang_xanh', to: 'dai_hoc_hong_bang', distance: 0.464},
            { from: 'dai_hoc_hong_bang', to: 'cau_dien_bien_phu', distance: 0.776},
            { from: 'cau_dien_bien_phu', to: 'nguyen_van_thu', distance: 0.648},
            { from: 'nguyen_van_thu', to: 'dai_truyen_hinh', distance: 0.7},
            { from: 'dai_truyen_hinh', to: 'benh_vien_nhi_dong_2', distance: 1.2},
            { from: 'benh_vien_nhi_dong_2', to: 'nha_hat_thanh_pho', distance: 0.275},
            { from: 'nha_hat_thanh_pho', to: 'cong_truong_me_linh', distance: 0.323},
            { from: 'cong_truong_me_linh', to: 'ben_bach_dang', distance: 0.370},
            { from: 'ben_bach_dang', to: 'cho_cu', distance: 0.616},
            { from: 'cho_cu', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.354},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'truong_ernst_thalmann', distance: 0.576},
            { from: 'truong_ernst_thalmann', to: 'nguyen_cu_trinh', distance: 0.666},
            { from: 'nguyen_cu_trinh', to: 'cong_quynh', distance: 0.231},
            { from: 'cong_quynh', to: 'nguyen_trai', distance: 0.918},
            { from: 'nguyen_trai', to: 'dai_hoc_su_pham', distance: 0.206},
            { from: 'dai_hoc_su_pham', to: 'cho_bau_sen', distance: 0.478},
            { from: 'cho_bau_sen', to: 'benh_vien_30_4', distance: 0.638},
            { from: 'benh_vien_30_4', to: 'nga_tu_ngo_quyen', distance: 1.2},
            { from: 'nga_tu_ngo_quyen', to: 'benh_vien_rang_ham_mat', distance: 0.493},
            { from: 'benh_vien_rang_ham_mat', to: 'benh_vien_cho_ray', distance: 0.561},
            { from: 'benh_vien_cho_ray', to: 'buu_dien_quan_5', distance: 0.467},
            { from: 'buu_dien_quan_5', to: 'tung_thien_vuong', distance: 1.0},
            { from: 'tung_thien_vuong', to: 'chua_phap_quang', distance: 0.795},
            { from: 'chua_phap_quang', to: 'ben_xe_quan_8', distance: 0.678},
            { from: 'ben_xe_quan_8', to: 'binh_hung', distance: 1.4},
            { from: 'binh_hung', to: 'sau_quoc_lo_50', distance: 0.263},
            { from: 'sau_quoc_lo_50', to: 'trinh_quang_nghi', distance: 2.9},
            { from: 'trinh_quang_nghi', to: 'khu_dan_cu_13a', distance: 0.729},            
            { from: 'khu_dan_cu_13a', to: 'dh_kinh_te_nvl', distance: 0.228},
            
            //Tuyến 50
            { from: 'dh_bach_khoa_q10', to: 'dai_hoc_bach_khoa_cong_sau', distance: 0.111},
            { from: 'dai_hoc_bach_khoa_cong_sau', to: 'benh_vien_trung_vuong_tht', distance: 0.329},
            { from: 'benh_vien_trung_vuong_tht', to: 'dai_hoc_bach_khoa', distance: 0.4},
            { from: 'dai_hoc_bach_khoa', to: 'cho_tan_binh', distance: 1.7},
            { from: 'cho_tan_binh', to: 'benh_vien_thong_nhat_ltk', distance: 0.712},
            { from: 'benh_vien_thong_nhat_ltk', to: 'benh_vien_quan_tan_binh', distance: 0.385},
            { from: 'benh_vien_quan_tan_binh', to: 'cong_vien_hoang_van_thu', distance: 1.2},
            { from: 'cong_vien_hoang_van_thu', to: 'rap_tan_son_nhat', distance: 0.702},
            { from: 'rap_tan_son_nhat', to: 'cuoi_cong_vien_gia_dinh', distance: 1.7},
            { from: 'cuoi_cong_vien_gia_dinh', to: 'dau_cong_vien_gia_dinh', distance: 0.552},
            { from: 'dau_cong_vien_gia_dinh', to: 'giao_xu_man_coi', distance: 0.352},
            { from: 'giao_xu_man_coi', to: 'cau_binh_loi', distance: 2.7},
            { from: 'cau_binh_loi', to: 'nga_tu_binh_trieu', distance: 1.4},
            { from: 'nga_tu_binh_trieu', to: 'cau_go_dua', distance: 3.3},
            { from: 'cau_go_da', to: 'nga_tu_to_ngoc_van_pham_van_dong', distance: 1.8},
            { from: 'nga_tu_to_ngoc_van_pham_van_dong', to: 'dai_hoc_csnd', distance: 1.0},
            { from: 'dai_hoc_csnd', to: 'tram_cau_vuot_linh_xuan', distance: 2.0},
            { from: 'tram_cau_vuot_linh_xuan', to: 'nghia_trang_thanh_pho', distance: 1.2},
            { from: 'nghia_trang_thanh_pho', to: 'dai_hoc_nong_lam', distance: 1.6},
            { from: 'dai_hoc_nong_lam', to: 'thu_vien_trung_tam_dhqg', distance: 3.0},
            { from: 'thu_vien_trung_tam_dhqg', to: 'dai_hoc_quoc_te_dd_qtst', distance: 1.8},
            { from: 'dai_hoc_quoc_te_dd_qtst', to: 'dai_hoc_quoc_te_dd_lqd', distance: 0.306},
            { from: 'dai_hoc_quoc_te_dd_lqd', to: 'ktx_khu_a_dhqg', distance: 1.9},
            { from: 'ktx_khu_a_dhqg', to: 'ben_xe_buyt_dhqg_moi', distance: 0.516},

            //Tuyến 52
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.709},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'cho_cu', distance: 0.180},
            { from: 'cho_cu', to: 'den_tho_an_giao_pasteur', distance: 0.397},
            { from: 'den_tho_an_giao_pasteur', to: 'nha_van_hoa_thanh_nien', distance: 1.7},
            { from: 'nha_van_hoa_thanh_nien', to: 'thao_cam_vien', distance: 1.3},
            { from: 'thao_cam_vien', to: 'truong_trung_hoc_gia_dinh', distance: 1.4},
            { from: 'truong_trung_hoc_gia_dinh', to: 'dai_hoc_hutech', distance: 0.565},
            { from: 'dai_hoc_hutech', to: 'cau_sai_gon', distance: 0.637},
            { from: 'cau_sai_gon', to: 'thao_dien', distance: 2.2},
            { from: 'thao_dien', to: 'nga_4_tay_hoa', distance: 4.2},
            { from: 'nga_4_tay_hoa', to: 'ga_metro_thu_duc', distance: 2.6},
            { from: 'ga_metro_thu_duc', to: 'khu_cong_nghe_cao_q9', distance: 2.5},
            { from: 'khu_cong_nghe_cao_q9', to: 'thu_vien_trung_tam_dhqg', distance: 2.7},
            { from: 'thu_vien_trung_tam_dhqg', to: 'dai_hoc_quoc_te_dd_qtst', distance: 1.4},
            { from: 'dai_hoc_quoc_te_dd_qtst', to: 'dai_hoc_quoc_te_dd_lqd', distance: 0},
            { from: 'dai_hoc_quoc_te_dd_lqd', to: 'ktx_khu_a_dhqg', distance: 0},
            { from: 'ktx_khu_a_dhqg', to: 'ben_xe_buyt_dhqg_moi', distance: 0},

            //Tuyến 53
            { from: 'le_hong_phong', to: 'benh_vien_truyen_mau_huyet_hoc', distance: 1.3},
            { from: 'benh_vien_truyen_mau_huyet_hoc', to: 'cho_thai_binh', distance: 0.319},
            { from: 'cho_thai_binh', to: 'ktx_tran_hung_dao', distance: 1.1},
            { from: 'ktx_tran_hung_dao', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.856},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.12},
            { from: 'nam_ky_khoi_nghia', to: 'cho_cu', distance: 0.07},
            { from: 'cho_cu', to: 'giao_lo_ham_nghi_ton_that_dam', distance: 0.114},
            { from: 'giao_lo_ham_nghi_ton_that_dam', to: 'ben_bach_dang', distance: 0.942},
            { from: 'ben_bach_dang', to: 'bao_tang_ton_duc_thang', distance: 0.318},
            { from: 'bao_tang_ton_duc_thang', to: 'ba_son', distance: 0.617},
            { from: 'ba_son', to: 'mam_non_hoa_lu', distance: 0.523},
            { from: 'mam_non_hoa_lu', to: 'tan_cang', distance: 2.2},
            { from: 'tan_cang', to: 'thao_dien', distance: 2.2},
            { from: 'thao_dien', to: 'nga_4_tay_hoa', distance: 4.2},
            { from: 'nga_4_tay_hoa', to: 'ga_metro_thu_duc', distance: 2.6},
            { from: 'ga_metro_thu_duc', to: 'dau_duong_le_van_chi', distance: 0.671},
            { from: 'dau_duong_le_van_chi', to: 'nga_ba_le_van_chi', distance: 0.615},
            { from: 'nga_ba_le_van_chi', to: 'dai_hoc_ngan_hang', distance: 1.2},
            { from: 'dai_hoc_ngan_hang', to: 'ubnd_phuong_linh_trung', distance: 0.732},
            { from: 'ubnd_phuong_linh_trung', to: 'tram_cau_vuot_linh_xuan', distance: 0.918},
            { from: 'tram_cau_vuot_linh_xuan', to: 'nghia_trang_thanh_pho', distance: 1.2},
            { from: 'nghia_trang_thanh_pho', to: 'dai_hoc_nong_lam', distance: 1.6}, 
            { from: 'dai_hoc_nong_lam', to: 'suoi_tien', distance: 2.5},
            { from: 'suoi_tien', to: 'nha_van_hoa_sinh_vien', distance: 2.7},
            { from: 'nha_van_hoa_sinh_vien', to: 'dai_hoc_quoc_te_dd_qtst', distance: 0.43},
            { from: 'dai_hoc_quoc_te_dd_qtst', to: 'dai_hoc_quoc_te_dd_lqd', distance: 0.306},
            { from: 'dai_hoc_quoc_te_dd_lqd', to: 'ho_da', distance: 0.696},
            { from: 'ho_da', to: 'ktx_khu_b_dhqg', distance: 2.7},
            { from: 'ktx_khu_b_dhqg', to:'ben_xe_buyt_dhqg', distance: 0.165},

            //Tuyến 55
            { from: 'ben_cong_vien_phan_mem_quang_trung', to: 'cong_vien_phan_mem_quang_trung', distance: 0.643},
            { from: 'cong_vien_phan_mem_quang_trung', to: 'dong_bac', distance: 0.544},
            { from: 'dong_bac', to: 'cong_vien_phan_mem_quang_trung_l', distance: 0.320},
            { from: 'cong_vien_phan_mem_quang_trung_l', to: 'cho_cau', distance: 1.1},
            { from: 'cho_cau', to: 'thpt_nguyen_cong_tru', distance: 2.6},
            { from: 'thpt_nguyen_cong_tru', to: 'ubnd_quan_go_vap', distance: 2.0},
            { from: 'ubnd_quan_go_vap', to: 'nha_tho_xom_thuoc', distance: 0.327},
            { from: 'nha_tho_xom_thuoc', to: 'sieu_thi_van_lang', distance: 0.846},
            { from: 'sieu_thi_van_lang', to: 'benh_vien_175', distance: 0.861},
            { from: 'benh_vien_175', to: 'dau_cong_vien_gia_dinh', distance: 0.789},
            { from: 'dau_cong_vien_gia_dinh', to: 'cuoi_cong_vien_gia_dinh', distance: 0.528},
            { from: 'cuoi_cong_vien_gia_dinh', to: 'dau_dao_duy_anh', distance: 0.284},
            { from: 'dau_dao_duy_anh', to: 'trung_tam_hoi_nghi_tiec_cuoi_white_palace', distance: 1.3},
            { from: 'trung_tam_hoi_nghi_tiec_cuoi_white_palace', to: 'nga_tu_phu_nhuan', distance: 0.564},
            { from: 'nga_tu_phu_nhuan', to: 'nga_tu_phan_xich_long', distance: 0.335},
            { from: 'nga_tu_phan_xich_long', to: 'nga_tu_thich_quang_duc', distance: 0.373},
            { from: 'nga_tu_thich_quang_duc', to: 'dai_hoc_van_hien_phu_nhuan', distance: 0.3},
            { from: 'dai_hoc_van_hien_phu_nhuan', to: 'cong_vien_van_hoa_phu_nhuan', distance: 0.521},
            { from: 'cong_vien_van_hoa_phu_nhuan', to: 'lang_ong_ba_chieu', distance: 0.782},
            { from: 'lang_ong_ba_chieu', to: 'cho_ba_chieu', distance: 0.281},
            { from: 'cho_ba_chieu', to: 'cho_hang_xanh', distance: 1.3},
            { from: 'cho_hang_xanh', to: 'dai_hoc_hutech', distance: 0.648},
            { from: 'dai_hoc_hutech', to: 'cau_sai_gon', distance: 0.637},
            { from: 'cau_sai_gon', to: 'cong_vien_cau_sai_gon', distance: 0.953},
            { from: 'cong_vien_cau_sai_gon', to: 'ben_xe_van_thanh', distance: 0.764},

            //Tuyến 56
            { from: 'ben_xe_buyt_cho_lon', to: 'cho_kim_bien', distance: 0.768},
            { from: 'cho_kim_bien', to: 'benh_vien_cho_ray', distance: 1.0},
            { from: 'benh_vien_cho_ray', to: 'dai_hoc_y_duoc', distance: 0.443},
            { from: 'dai_hoc_y_duoc', to: 'benh_vien_nguyen_tri_phuong_adv', distance: 0.650},
            { from: 'benh_vien_nguyen_tri_phuong_adv', to: 'cho_an_dong', distance: 0.197},
            { from: 'cho_an_dong', to: 'cho_bau_sen', distance: 0.756},
            { from: 'cho_bau_sen', to: 'dai_hoc_sai_gon', distance: 0.466},
            { from: 'dai_hoc_sai_gon', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 2.9},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.06},
            { from: 'nam_ky_khoi_nghia', to: 'ben_bach_dang', distance: 1.1},
            { from: 'ben_bach_dang', to: 'bao_tang_ton_duc_thang', distance: 0.318},
            { from: 'bao_tang_ton_duc_thang', to: 'ba_son', distance: 0.617},
            { from: 'ba_son', to: 'mam_non_hoa_lu', distance: 0.523},
            { from: 'mam_non_hoa_lu', to: 'tan_cang', distance: 2.2},
            { from: 'tan_cang', to: 'thao_dien', distance: 2.2},
            { from: 'thao_dien', to: 'nga_4_tay_hoa', distance: 4.2},
            { from: 'nga_4_tay_hoa', to: 'lang_thieu_nien_thu_duc', distance: 3.3},
            { from: 'lang_thieu_nien_thu_duc', to: 'nga_ba_chuong_duong', distance: 0.324},
            { from: 'nga_ba_chuong_duong', to: 'truong_dhsp_ky_thuat', distance: 1.3},
            { from: 'truong_dhsp_ky_thuat', to: 'tram_y_te_phuong_hiep_phu', distance: 1.3},
            { from: 'tram_y_te_phuong_hiep_phu', to: 'ktx_dai_hoc_su_pham_ky_thuat', distance: 1.7},
            { from: 'ktx_dai_hoc_su_pham_ky_thuat', to: 'nga_3_my_thanh', distance: 1.9},
            { from: 'nga_3_my_thanh', to: 'nga_ba_lam_vien_1', distance: 2.3},
            { from: 'nga_ba_lam_vien_1', to: 'nghia_trang_liet_si_tphcm', distance: 0.375},
            { from: 'nghia_trang_liet_si_tphcm', to: 'ben_xe_mien_dong_moi', distance: 1.4},

            //Tuyến 59
            { from: 'ben_xe_buyt_quan_8', to: 'cau_nhi_thien_duong', distance: 0.717},
            { from: 'cau_nhi_thien_duong', to: 'ubnd_quan_8', distance: 1.8},
            { from: 'ubnd_quan_8', to: 'pham_hung', distance: 0.667},
            { from: 'pham_hung', to: 'nha_tho_nam_hai', distance: 0.366},
            { from: 'nha_tho_nam_hai', to: 'benh_vien_nguyen_tri_phuong_ntp', distance: 2.1},
            { from: 'benh_vien_nguyen_tri_phuong_ntp', to: 'dai_hoc_kinh_te_q10', distance: 0.723},
            { from: 'dai_hoc_kinh_te_q10', to: 'nha_tho_dong_tien', distance: 0.993},
            { from: 'nha_tho_dong_tien', to: 'benh_vien_115', distance: 0.345},
            { from: 'benh_vien_115', to: 'dai_hoc_bach_khoa_cong_sau', distance: 0.924},
            { from: 'dai_hoc_bach_khoa_cong_sau', to: 'benh_vien_trung_vuong_tht', distance: 0.321},
            { from: 'benh_vien_trung_vuong_tht', to: 'dai_hoc_bach_khoa', distance: 0.392},
            { from: 'dai_hoc_bach_khoa', to: 'cho_tan_binh', distance: 1.7},
            { from: 'cho_tan_binh', to: 'benh_vien_thong_nhat_ltk', distance: 0.721},
            { from: 'benh_vien_thong_nhat_ltk', to: 'benh_vien_quan_tan_binh', distance: 0.392},
            { from: 'benh_vien_quan_tan_binh', to: 'cong_vien_hoang_van_thu', distance: 1.2},
            { from: 'cong_vien_hoang_van_thu', to: 'rap_tan_son_nhat', distance: 0.702},
            { from: 'rap_tan_son_nhat', to: 'cuoi_cong_vien_gia_dinh', distance: 1.7},
            { from: 'cuoi_cong_vien_gia_dinh', to: 'dau_cong_vien_gia_dinh', distance: 0.552},
            { from: 'dau_cong_vien_gia_dinh', to: 'nga_ba_pham_ngu_lao', distance: 0.969},
            { from: 'nga_ba_pham_ngu_lao', to: 'cau_vuot_nga_sau_go_vap', distance: 0.628},
            { from: 'cau_vuot_nga_sau_go_vap', to: 'nga_tu_phan_van_tri', distance: 1},
            { from: 'nga_tu_phan_van_tri', to: 'nga_tu_an_nhon', distance: 1.2},
            { from: 'nga_tu_an_nhon', to: 'nga_tu_ga', distance: 1.8},
            { from: 'nga_tu_ga', to: 'ben_xe_nga_tu_ga', distance: 1.6},
            
            //Tuyến 64
            { from: 'ben_xe_buyt_quan_8', to: 'nga_tu_dinh_bo_linh', distance: 0.595},
            { from: 'nga_tu_dinh_bo_linh', to: 'ubnd_phuong_13', distance: 1.1},
            { from: 'ubnd_phuong_13', to: 'cau_rach_lang', distance: 0.607},
            { from: 'cau_rach_lang', to: 'hoc_vien_can_bo', distance: 0.489},
            { from: 'hoc_vien_can_bo', to: 'nha_van_hoa_lao_dong', distance: 1.3},
            { from: 'nha_van_hoa_lao_dong', to: 'nga_nam_binh_hoa', distance: 0.51},
            { from: 'nga_nam_binh_hoa', to: 'nha_tho_binh_hoa', distance: 0.259},
            { from: 'nha_tho_binh_hoa', to: 'benh_vien_gia_dinh', distance: 0.699},
            { from: 'benh_vien_gia_dinh', to: 'benh_vien_phuoc_an', distance: 0.976},
            { from: 'benh_vien_phuoc_an', to: 'dai_hoc_van_hien', distance: 0.187},
            { from: 'dai_hoc_van_hien', to: 'nga_tu_thich_quang_duc', distance: 0.348},
            { from: 'nga_tu_thich_quang_duc', to: 'nga_tu_phan_xich_long', distance: 0.284},
            { from: 'nga_tu_phan_xich_long', to: 'nga_tu_phu_nhuan', distance: 0.385},
            { from: 'nga_tu_phu_nhuan', to: 'cong_truoc_svd_quan_khu_7', distance: 1.4},
            { from: 'cong_truoc_svd_quan_khu_7', to: 'vong_xoay_lang_cha_ca', distance: 1.1},
            { from: 'vong_xoay_lang_cha_ca', to: 'hoi_cho_trien_lam_tan_binh', distance: 0.646},
            { from: 'hoi_cho_trien_lam_tan_binh', to: 'cay_xang_doi', distance: 0.466},
            { from: 'cay_xang_doi', to: 'nga_tu_bay_hien', distance: 0.159},
            { from: 'nga_tu_bay_hien', to: 'hoi_chu_thap_do_tan_binh', distance: 0.78},
            { from: 'hoi_chu_thap_do_tan_binh', to: 'nga_tu_nguyen_hong_dao', distance: 0.886},
            { from: 'nga_tu_nguyen_hong_dao', to: 'tram_nga_4_thoai_ngoc_hau', distance: 0.990},
            { from: 'tram_nga_4_thoai_ngoc_hau', to: 'ubnd_quan_tan_phu', distance: 0.61},
            { from: 'ubnd_quan_tan_phu', to: 'thoai_ngoc_hau', distance: 0.563},
            { from: 'thoai_ngoc_hau', to: 'thuy_ta', distance: 1.9},
            { from: 'thuy_ta', to: 'ben_xe_buyt_dam_sen', distance: 0.261},

            //Tuyến 65 (giống 03 nha)
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'khach_san_new_world_pht', distance: 1.9},
            { from: 'khach_san_new_world_pht', to: 'trong_dong', distance: 0.625},
            { from: 'trong_dong', to: 'vo_van_tan', distance: 0.256},
            { from: 'vo_van_tan', to: 'cong_truong_dan_chu', distance: 0.85},
            { from: 'cong_truong_dan_chu', to: 'nga_ba_chi_hoa', distance: 0.809},
            { from: 'nga_ba_chi_hoa', to: 'cho_buu_da', distance: 0.218},
            { from: 'cho_buu_da', to: 'rap_hat_thanh_van', distance: 0.51},
            { from: 'rap_hat_thanh_van', to: 'cho_hoa_hung', distance: 0.112},
            { from: 'cho_hoa_hung', to: 'cong_vien_le_thi_rieng', distance: 0.39},
            { from: 'cong_vien_le_thi_rieng', to: 'nga_ba_banh_van_tran', distance: 0.713},
            { from: 'nga_ba_banh_van_tran', to: 'ong_ta', distance: 0.233},
            { from: 'ong_ta', to: 'benh_vien_thong_nhat', distance: 0.731},
            { from: 'benh_vien_thong_nhat', to: 'benh_vien_quan_tan_binh', distance: 0.328},
            { from: 'benh_vien_quan_tan_binh', to: 'nga_tu_bay_hien', distance: 0.823},
            { from: 'nga_tu_bay_hien', to: 'nga_ba_hoang_hoa_tham', distance: 0.461},
            { from: 'nga_ba_hoang_hoa_tham', to: 'nga_ba_binh_gia', distance: 0.424},
            { from: 'nga_ba_binh_gia', to: 'nga_ba_ap_bac', distance: 0.438},
            { from: 'nga_ba_ap_bac', to: 'cho_vo_thanh_trang', distance: 0.413},
            { from: 'cho_vo_thanh_trang', to: 'nga_tu_tan_ky_tan_quy', distance: 0.497},
            { from: 'nga_tu_tan_ky_tan_quy', to: 'mui_tau_cong_hoa', distance: 0.448},
            { from: 'mui_tau_cong_hoa', to: 'nga_ba_che_lan_vien', distance: 0.465},
            { from: 'nga_ba_che_lan_vien', to: 'khu_cong_nghiep_tan_binh', distance: 1.2},
            { from: 'khu_cong_nghiep_tan_binh', to: 'chua_vinh_phuoc', distance: 0.97},
            { from: 'chua_vinh_phuoc', to: 'bitis', distance: 1.3},
            { from: 'bitis', to: 'ben_xe_an_suong', distance: 1.7},

            //Tuyến 69
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'truong_ernst_thalmann', distance: 0.223},
            { from: 'truong_ernst_thalmann', to: 'nga_sau_phu_dong', distance: 0.468},
            { from: 'nga_sau_phu_dong', to: 'trong_dong', distance: 0.43},
            { from: 'trong_dong', to: 'cach_mang_thang_tam', distance: 1},
            { from: 'cach_mang_thang_tam', to: 'ho_thi_ky', distance: 1.7},
            { from: 'ho_thi_ky', to: 'cho_phuong_10', distance: 0.324},
            { from: 'cho_phuong_10', to: 'benh_vien_nhi_dong_1', distance: 0.379},
            { from: 'benh_vien_nhi_dong_1', to: 'nha_tho_dong_tien', distance: 0.545},
            { from: 'nha_tho_dong_tien', to: 'benh_vien_115', distance: 0.345},
            { from: 'benh_vien_115', to: 'dai_hoc_bach_khoa_cong_sau', distance: 0.924},
            { from: 'dai_hoc_bach_khoa_cong_sau', to: 'benh_vien_trung_vuong_tht', distance: 0.321},
            { from: 'benh_vien_trung_vuong_tht', to: 'nha_thi_dau_phu_tho', distance: 0.306},
            { from: 'nha_thi_dau_phu_tho', to: 'cho_chim_xanh', distance: 1.4},
            { from: 'cho_chim_xanh', to: 'ben_xe_buyt_dam_sen', distance: 0.755},
            { from: 'ben_xe_buyt_dam_sen', to: 'dam_sen', distance: 0.528},
            { from: 'dam_sen', to: 'nga_4_hoa_binh', distance: 0.515},
            { from: 'nga_4_hoa_binh', to: 'thoai_ngoc_hau', distance: 1.2},
            { from: 'thoai_ngoc_hau', to: 'ubnd_quan_tan_phu', distance: 0.635},
            { from: 'ubnd_quan_tan_phu', to: 'tram_pham_van_xao', distance: 1.6},
            { from: 'tram_pham_van_xao', to: 'tram_cho_tan_huong', distance: 2.1},
            { from: 'tram_cho_tan_huong', to: 'tram_nga_4_go_dau_tan_quy', distance: 0.662},
            { from: 'tram_nga_4_go_dau_tan_quy', to: 'tram_tan_ky_tan_quy', distance: 0.801},
            { from: 'tram_tan_ky_tan_quy', to: 'tram_xang', distance: 1.6},
            { from: 'tram_xang', to: 'tram_dau_le_trong_tan', distance: 0.898},
            { from: 'tram_dau_le_trong_tan', to: 'tram_tay_thanh', distance: 1.5},
            { from: 'tram_tay_thanh', to: 'ubnd_binh_hung_hoa_b', distance: 3.3},
            { from: 'ubnd_binh_hung_hoa_b', to: 'truong_tri_tue_viet', distance: 1.2},

            //Tuyến 75
            { from: 'ben_xe_buyt_sai_gon', to: 'truong_emst_thalmann', distance: 0.793},
            { from: 'truong_emst_thalmann', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.691},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.12},
            { from: 'nam_ky_khoi_nghia', to: 'cho_cu', distance: 0.07},
            { from: 'cho_cu', to: 'giao_lo_ham_nghi_ton_that_dam', distance: 0.114},
            { from: 'giao_lo_ham_nghi_ton_that_dam', to: 'cang_sai_gon', distance: 2.4},
            { from: 'cang_sai_gon', to: 'cau_tan_thuan_2', distance: 1.1},
            { from: 'cau_tan_thuan_2', to: 'khu_che_xuat_tan_thuan', distance: 0.655},
            { from: 'khu_che_xuat_tan_thuan', to: 'cau_phu_my', distance: 1.7},
            { from: 'cau_phu_my', to: 'go_o_moi', distance: 0.911},
            { from: 'go_o_moi', to: 'truong_ngo_quyen_q7', distance: 1.9},
            { from: 'truong_ngo_quyen_q7', to: 'pham_huu_lau', distance: 0.86},
            { from: 'pham_huu_lau', to: 'cho_phu_xuan', distance: 0.523},
            { from: 'cho_phu_xuan', to: 'chua_la', distance: 1.3},
            { from: 'chua_la', to: 'pha_binh_khanh', distance: 3.4},
            { from: 'pha_binh_khanh', to: 'cho_binh_khanh', distance: 1.7},
            { from: 'cho_binh_khanh', to: 'nghia_trang_binh_khanh', distance: 7.7},
            { from: 'nghia_trang_binh_khanh', to: 'nga_3_an_thoi_dong', distance: 4.6},
            { from: 'nga_3_an_thoi_dong', to: 'nga_ba_dao_khi', distance: 21.5},
            { from: 'nga_ba_dao_khi', to: 'cay_xang_duc_thanh', distance: 2.6},
            { from: 'cay_xang_duc_thanh', to: 'benh_vien_huyen_can_gio', distance: 5.8},
            { from: 'benh_vien_huyen_can_gio', to: 'ben_xe_buyt_can_gio', distance: 2.5},
            
            //Thêm tuyến 94
            { from: 'ben_xe_buyt_cho_lon', to: 'ben_xe_cho_lon', distance: 0.655},
            { from: 'ben_xe_cho_lon', to: 'ta_uyen', distance: 0.305},
            { from: 'ta_uyen', to: 'benh_vien_cho_ray', distance: 0.992},
            { from: 'benh_vien_cho_ray', to: 'nha_thi_dau_phu_tho', distance: 1.8},
            { from: 'nha_thi_dau_phu_tho', to: 'benh_vien_trung_vuong', distance: 0.275},
            { from: 'benh_vien_trung_vuong', to: 'dai_hoc_bach_khoa', distance: 0.367},
            { from: 'dai_hoc_bach_khoa', to: 'buu_dien_phu_tho', distance: 0.474},
            { from: 'buu_dien_phu_tho', to: 'nga_ba_thanh_thai', distance: 0.29},
            { from: 'nga_ba_thanh_thai', to: 'cho_tan_binh', distance: 0.905},
            { from: 'cho_tan_binh', to: 'benh_vien_thong_nhat_ltk', distance: 0.712},
            { from: 'benh_vien_thong_nhat_ltk', to: 'benh_vien_quan_tan_binh', distance: 0.385},
            { from: 'benh_vien_quan_tan_binh', to: 'hoi_cho_trien_lam_tan_binh', distance: 0.213},
            { from: 'hoi_cho_trien_lam_tan_binh', to: 'cay_xang_doi', distance: 0.466},
            { from: 'cay_xang_doi', to: 'nga_tu_bay_hien', distance: 0.159},
            { from: 'nga_tu_bay_hien', to: 'nga_ba_hoang_hoa_tham', distance: 0.461},
            { from: 'nga_ba_hoang_hoa_tham', to: 'nga_ba_binh_gia', distance: 0.424},
            { from: 'nga_ba_binh_gia', to: 'nga_ba_ap_bac', distance: 0.438},
            { from: 'nga_ba_ap_bac', to: 'cho_vo_thanh_trang', distance: 0.413},
            { from: 'cho_vo_thanh_trang', to: 'nga_tu_tan_ky_tan_quy', distance: 0.497},
            { from: 'nga_tu_tan_ky_tan_quy', to: 'mui_tau_cong_hoa', distance: 0.448},
            { from: 'mui_tau_cong_hoa', to: 'nga_ba_che_lan_vien', distance: 0.465},
            { from: 'nga_ba_che_lan_vien', to: 'khu_cong_nghiep_tan_binh', distance: 1.2},
            { from: 'khu_cong_nghiep_tan_binh', to: 'chua_vinh_phuoc', distance: 0.97},
            { from: 'chua_vinh_phuoc', to: 'bitis', distance: 1.3},
            { from: 'bitis', to: 'trung_tam_van_hoa_quan_12', distance: 2.2},
            { from: 'trung_tam_van_hoa_quan_12' , to: 'nga_ba_cu_cai', distance: 1.1},
            { from: 'nga_ba_cu_cai', to: 'nga_ba_bui_mon', distance: 1.1},
            { from: 'nga_ba_bui_mon', to: 'nga_tu_gieng_nuoc', distance: 1.1},
            { from: 'nga_tu_gieng_nuoc', to: 'nga_tu_hoc_mon', distance: 0.997},
            { from: 'nga_tu_hoc_mon', to: 'dan_thang', distance: 0.564},
            { from: 'dan_thang', to: 'nga_ba_lam_son', distance: 0.615},
            { from: 'nga_ba_lam_son', to: 'doanh_trai_quan_doi', distance: 0.349},
            { from: 'doanh_trai_quan_doi', to: 'nga_ba_hong_chau' , distance: 0.569},
            { from: 'nga_ba_hong_chau' , to: 'cau_an_ha', distance: 2.4},
            { from: 'cau_an_ha', to: 'benh_vien_xuyen_a', distance: 1.4},
            { from: 'benh_vien_xuyen_a', to: 'mui_tau_tinh_lo_2', distance: 1.3},
            { from: 'mui_tau_tinh_lo_2', to: 'nga_tu_quan_doi', distance: 3.1},
            { from: 'nga_tu_quan_doi', to: 'cau_vuot_cu_chi', distance: 4.7}, 
            { from: 'cau_vuot_cu_chi' , to: 'ben_xe_cu_chi', distance: 0.882},
        
            //Tuyến 103
            { from: 'ben_xe_cho_lon_a', to: 'ben_xe_cho_lon', distance: 0.665},
            { from: 'ben_xe_cho_lon', to: 'ta_uyen', distance: 0.978},
            { from: 'ta_uyen', to: 'le_dai_hanh', distance: 0.958},
            { from: 'le_dai_hanh', to: 'nha_thi_dau_phu_tho', distance: 0.923},
            { from: 'nha_thi_dau_phu_tho', to: 'benh_vien_trung_vuong_ltk', distance: 0.266},
            { from: 'benh_vien_trung_vuong_ltk', to: 'benh_vien_trung_vuong_tht', distance: 0.195},
            { from: 'benh_vien_trung_vuong_tht', to: 'dai_hoc_bach_khoa_cong_sau', distance: 0.333},
            { from: 'dai_hoc_bach_khoa_cong_sau', to: 'truong_thpt_nguyen_du', distance: 0.822},
            { from: 'truong_thpt_nguyen_du', to: 'nga_tu_dong_nai', distance: 0.36},
            { from: 'nga_tu_dong_nai', to: 'cong_vien_le_thi_rieng_q10', distance: 0.718},
            { from: 'cong_vien_le_thi_rieng_q10', to: 'nga_ba_banh_van_tran', distance: 0.713},
            { from: 'nga_ba_banh_van_tran', to: 'ong_ta', distance: 0.233},
            { from: 'ong_ta', to: 'benh_vien_thong_nhat', distance: 0.731},
            { from: 'benh_vien_thong_nhat', to: 'benh_vien_quan_tan_binh', distance: 0.328},
            { from: 'benh_vien_quan_tan_binh', to: 'cong_vien_hoang_van_thu', distance: 1.2},
            { from: 'cong_vien_hoang_van_thu', to: 'parkson_truong_son', distance: 1.5},
            { from: 'parkson_truong_son', to: 'san_bay_tan_son_nhat', distance: 0.982},
            { from: 'san_bay_tan_son_nhat', to: 'ga_quoc_noi_san_bay_tan_son_nhat', distance: 0.278},
            { from: 'ga_quoc_noi_san_bay_tan_son_nhat', to: 'vong_xoay_nguyen_thai_son', distance: 1.9}, 
            { from: 'vong_xoay_nguyen_thai_son', to: 'nga_ba_pham_ngu_lao', distance: 1.1},
            { from: 'nga_ba_pham_ngu_lao', to: 'cau_vuot_nga_sau_go_vap', distance: 0.628},
            { from: 'cau_vuot_nga_sau_go_vap', to: 'sieu_thi_van_lang', distance: 0.36},
            { from: 'sieu_thi_van_lang', to: 'nha_tho_xom_thuoc', distance: 0.804},
            { from: 'nha_tho_xom_thuoc', to: 'ubnd_quan_go_vap', distance: 0.447},
            { from: 'ubnd_quan_go_vap', to: 'cho_cay_tram', distance: 1.7},
            { from: 'cho_cay_tram', to: 'nga_ba_le_duc_tho', distance: 1.8},
            { from: 'nga_ba_le_duc_tho', to: 'nha_tho_nu_vuong_hoa_binh', distance: 0.333},
            { from: 'nha_tho_nu_vuong_hoa_binh', to: 'ubnd_quan_12', distance: 1.3},
            { from: 'ubnd_quan_12', to: 'dd_ben_xe_nga_tu_ga', distance: 2.7},
            { from: 'dd_ben_xe_nga_tu_ga', to: 'ngoc_lan', distance: 1.3},
            { from: 'ngoc_lan', to: 'ben_xe_nga_tu_ga', distance: 0.604},
            
            //Tuyến 152
            { from: 'khu_dan_cu_trung_son', to: 'thao_loan_plaza', distance: 0.368},
            { from: 'thao_loan_plaza', to: 'thao_loan_plaza_259', distance: 0.589},
            { from: 'thao_loan_plaza_259', to: 'vong_xoay_cau_him_lam', distance: 0.693},
            { from: 'vong_xoay_cau_him_lam', to: 'truong_duong_ba_trac', distance: 1.1},
            { from: 'truong_duong_ba_trac', to: 'cho_nanci', distance: 1.3},
            { from: 'cho_nanci', to: 'benh_vien_rang_ham_mat_q1', distance: 0.989},
            { from: 'benh_vien_rang_ham_mat_q1', to: 'ktx_tran_hung_dao', distance: 0.536},
            { from: 'ktx_tran_hung_dao', to: 'tram_trung_chuyen_tren_duong_ham_nghi', distance: 0.856},
            { from: 'tram_trung_chuyen_tren_duong_ham_nghi', to: 'nam_ky_khoi_nghia', distance: 0.06},
            { from: 'nam_ky_khoi_nghia', to: 'cho_cu', distance: 0.07},
            { from: 'cho_cu', to: 'den_tho_an_giao_pasteur', distance: 0.397},
            { from: 'den_tho_an_giao_pasteur', to: 'nguyen_thi_minh_khai', distance: 0.904},
            { from: 'nguyen_thi_minh_khai', to: 'dai_hoc_kien_truc', distance: 0.327},
            { from: 'dai_hoc_kien_truc', to: 'dien_bien_phu', distance: 0.279},
            { from: 'dien_bien_phu', to: 'nha_thieu_nhi_thanh_pho', distance: 0.48},
            { from: 'nha_thieu_nhi_thanh_pho', to: 'trung_tam_van_hoa_quan_phu_nhuan', distance: 2.0},
            { from: 'trung_tam_van_hoa_quan_phu_nhuan', to: 'benh_vien_quan_phu_nhuan', distance: 0.698},
            { from: 'benh_vien_quan_phu_nhuan', to: 'cong_truoc_svd_quan_khu_7', distance: 0.530},
            { from: 'cong_truoc_svd_quan_khu_7', to: 'parkson_truong_son', distance: 1.1},
            { from: 'parkson_truong_son', to: 'san_bay_tan_son_nhat', distance: 0.982},
            
            //Thêm tuyến 155
            { from: 'ga_ben_thanh', to: 'chua_truong_thanh', distance: 0.213},
            { from: 'chua_truong_thanh', to: 'cho_dan_sinh', distance: 0.41},
            { from: 'cho_dan_sinh', to: 'so_giao_dich_chung_khoan', distance: 0.42},
            { from: 'so_giao_dich_chung_khoan', to: 'den_tho_an_giao_pasteur', distance: 0.677},
            { from: 'den_tho_an_giao_pasteur', to: 'so_tai_nguyen_moi_truong', distance: 0.478},
            { from: 'so_tai_nguyen_moi_truong', to: 'nha_hat_thanh_pho', distance: 0.561},
            { from: 'nha_hat_thanh_pho', to: 'bv_nhi_dong_2_ltt', distance: 1},
            { from: 'bv_nhi_dong_2_ltt', to: 'tram_dung_dinh_doc_lap', distance: 1.5},
            { from: 'tram_dung_dinh_doc_lap', to: 'cho_ben_thanh', distance: 0.871},
            { from: 'cho_ben_thanh', to: 'ga_ben_thanh', distance: 0.427},
        ];