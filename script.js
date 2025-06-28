// تنظیمات گوگل شیت
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxE5m4vVlYcmXAcZO7RBaLGEApUUSzUjgZda_UE4TqLcb6s9uqiIFM1kThZVEms8kLB/exec';

// رنگ‌های نمودار
const chartColors = [
    'rgba(255, 99, 132, 0.7)',   // صورتی
    'rgba(54, 162, 235, 0.7)',   // آبی
    'rgba(255, 206, 86, 0.7)',   // زرد
    'rgba(75, 192, 192, 0.7)',   // فیروزه‌ای
    'rgba(153, 102, 255, 0.7)',  // بنفش
    'rgba(255, 159, 64, 0.7)',   // نارنجی
    'rgba(46, 204, 113, 0.7)',   // سبز
    'rgba(231, 76, 60, 0.7)',    // قرمز
    'rgba(52, 152, 219, 0.7)',   // آبی روشن
    'rgba(155, 89, 182, 0.7)',   // بنفش تیره
    'rgba(241, 196, 15, 0.7)',   // زرد طلایی
    'rgba(230, 126, 34, 0.7)',   // نارنجی تیره
    'rgba(26, 188, 156, 0.7)',   // فیروزه‌ای تیره
    'rgba(231, 76, 60, 0.7)',    // قرمز روشن
    'rgba(52, 73, 94, 0.7)',     // آبی تیره
    'rgba(149, 165, 166, 0.7)'   // خاکستری
];

// داده‌های ثابت خدمات
const staticServices = [
    {
        id: '1',
        className: '301',
        teacherName: 'باقری - ناصری',
        studentCount: 15,
        serviceType: 'جشن',
        guestCount: 30,
        cost: 10000000,
        description: ''
    },
    {
        id: '2',
        className: '401',
        teacherName: 'اکبری - واحدی - انتظامی',
        studentCount: 13,
        serviceType: 'جشن',
        guestCount: 65,
        cost: 11000000,
        description: ''
    },
    {
        id: '3',
        className: '402',
        teacherName: 'شمسی - خوشباف',
        studentCount: 14,
        serviceType: 'پک همسایه',
        packageCount: 60,
        cost: 5000000,
        description: ''
    },
    {
        id: '4',
        className: '403',
        teacherName: 'قانع منش - عطاران',
        studentCount: 13,
        serviceType: 'جشن',
        guestCount: 45,
        cost: 12000000,
        description: ''
    },
    {
        id: '5',
        className: '404',
        teacherName: 'زارع - احمدی',
        studentCount: 15,
        serviceType: 'جشن',
        guestCount: 80,
        cost: 17000000,
        description: ''
    },
    {
        id: '6',
        className: '405',
        teacherName: 'حدادیان - علیزاده',
        studentCount: 13,
        serviceType: 'پک همسایه',
        packageCount: 75,
        cost: 7000000,
        description: ''
    },
    {
        id: '7',
        className: '407',
        teacherName: 'منبتی - خیابانی',
        studentCount: 12,
        serviceType: 'جشن',
        guestCount: 70,
        cost: 15000000,
        description: ''
    },
    {
        id: '8',
        className: '408',
        teacherName: 'عطاران - نجفیان',
        studentCount: 13,
        serviceType: 'پک همسایه',
        packageCount: 50,
        cost: 10000000,
        description: ''
    },
    {
        id: '9',
        className: '521',
        teacherName: 'روشنی - پورزکی',
        studentCount: 15,
        serviceType: 'پک همسایه',
        packageCount: 75,
        cost: 6000000,
        description: ''
    },
    {
        id: '10',
        className: '522',
        teacherName: 'مرمری - امیدوار',
        studentCount: 11,
        serviceType: 'سرود',
        performedEvents: [
            { id: '2', name: '401 - اکبری - واحدی - انتظامی' },
            { id: '5', name: '404 - زارع - احمدی' }
        ],
        cost: 0,
        description: ''
    },
    {
        id: '11',
        className: '528',
        teacherName: 'هاشمی - یاوری',
        studentCount: 14,
        serviceType: 'جشن',
        guestCount: 120,
        cost: 18000000,
        description: ''
    },
    {
        id: '12',
        className: '527',
        teacherName: 'هنگوال - نیک صفت',
        studentCount: 13,
        serviceType: 'اطعام',
        feedCount: 1000,
        cost: 15000000,
        description: ''
    },
    {
        id: '13',
        className: '5210',
        teacherName: 'قانع منش - باقر زاده',
        studentCount: 15,
        serviceType: 'جشن',
        guestCount: 55,
        cost: 14000000,
        description: ''
    },
    {
        id: '14',
        className: '629',
        teacherName: 'میری - نمایی',
        studentCount: 14,
        serviceType: 'جشن',
        guestCount: 33,
        cost: 11000000,
        description: ''
    },
    {
        id: '15',
        className: '523',
        teacherName: 'حسینی - فرشچی',
        studentCount: 12,
        serviceType: 'جشن',
        guestCount: 40,
        cost: 10000000,
        description: ''
    },
    {
        id: '16',
        className: '5211',
        teacherName: 'حیدرزاده - روانسالار - امیرآبادی',
        studentCount: 10,
        serviceType: 'سرود',
        performedEvents: [
            { id: '15', name: '523 - حسینی - فریحی' },
            { id: '7', name: '407 - مبینی - خدابنده' },
            { id: '14', name: '629 - میری - نعمایی' }
        ],
        cost: 0,
        description: ''
    }
];

// تابع دریافت همه خدمات
function getAllServices() {
    return staticServices;
}

// تابع ذخیره خدمت جدید
function saveService(serviceData) {
    try {
        // بررسی اطلاعات ضروری
        if (!serviceData.className || !serviceData.teacherName || !serviceData.studentCount || !serviceData.serviceType) {
            return {
                success: false,
                message: 'لطفاً همه فیلدهای ضروری را پر کنید'
            };
        }

        // بررسی اطلاعات اضافی بر اساس نوع خدمت
        switch (serviceData.serviceType) {
            case 'جشن':
                if (!serviceData.guestCount) {
                    return {
                        success: false,
                        message: 'لطفاً تعداد مهمان‌ها را وارد کنید'
                    };
                }
                break;
            case 'سرود':
                if (!serviceData.performedEvents || serviceData.performedEvents.length === 0) {
                    return {
                        success: false,
                        message: 'لطفاً حداقل یک جشن را انتخاب کنید'
                    };
                }
                break;
            case 'اطعام':
                if (!serviceData.feedCount) {
                    return {
                        success: false,
                        message: 'لطفاً تعداد افراد اطعام شده را وارد کنید'
                    };
                }
                break;
            case 'پک همسایه':
                if (!serviceData.packageCount) {
                    return {
                        success: false,
                        message: 'لطفاً تعداد پک‌های توزیع شده را وارد کنید'
                    };
                }
                break;
        }

        // دریافت خدمات موجود
        let services = getAllServices();
        
        // ایجاد شناسه یکتا
        const id = Date.now().toString();
        
        // افزودن خدمت جدید
        const newService = {
            id,
            className: serviceData.className,
            teacherName: serviceData.teacherName,
            studentCount: parseInt(serviceData.studentCount),
            serviceType: serviceData.serviceType,
            cost: parseInt(serviceData.cost) || 0,
            description: serviceData.description || '',
            timestamp: new Date().toISOString()
        };
        
        // اضافه کردن اطلاعات اضافی بر اساس نوع خدمت
        switch (serviceData.serviceType) {
            case 'جشن':
                newService.guestCount = parseInt(serviceData.guestCount);
                break;
            case 'سرود':
                newService.performedEvents = serviceData.performedEvents;
                break;
            case 'اطعام':
                newService.feedCount = parseInt(serviceData.feedCount);
                break;
            case 'پک همسایه':
                newService.packageCount = parseInt(serviceData.packageCount);
                break;
        }
        
        services.push(newService);
        
        // ذخیره در localStorage
        localStorage.setItem('services', JSON.stringify(services));
        
        return {
            success: true,
            message: 'خدمت با موفقیت ذخیره شد'
        };
    } catch (error) {
        console.error('Error saving service:', error);
        return {
            success: false,
            message: 'خطا در ذخیره اطلاعات'
        };
    }
}

// تابع به‌روزرسانی جدول در صفحه پرزنت
function updateServiceTable() {
    const tableBody = document.getElementById('servicesTableBody');
    if (!tableBody) return;
    
    const services = getAllServices();
    tableBody.innerHTML = '';
    
    services.forEach((service, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${service.className}</td>
            <td>${service.teacherName}</td>
            <td>${service.studentCount}</td>
            <td>${service.serviceType}</td>
            <td>${new Intl.NumberFormat('fa-IR').format(service.cost)} تومان</td>
            <td>${getServiceDetails(service)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// تابع به‌روزرسانی جدول در صفحه اضافه کردن خدمت
function updateAddServiceTable() {
    const tableBody = document.getElementById('serviceTableBody');
    if (!tableBody) return;
    
    // دریافت خدمات از localStorage
    const services = getAllServices();
    
    // پاک کردن محتوای فعلی جدول
    tableBody.innerHTML = '';
    
    // اضافه کردن ردیف‌های جدید
    services.forEach((service, index) => {
        const row = document.createElement('tr');
        
        // اطلاعات اضافی بر اساس نوع خدمت
        let extraInfo = '';
        switch (service.serviceType) {
            case 'جشن':
                extraInfo = `تعداد مهمان: ${service.guestCount || 0}`;
                break;
            case 'سرود':
                extraInfo = `جشن‌ها: ${service.performedEvents?.map(event => event.name).join('، ') || ''}`;
                break;
            case 'اطعام':
                extraInfo = `تعداد افراد: ${service.feedCount || 0}`;
                break;
            case 'پک همسایه':
                extraInfo = `تعداد پک: ${service.packageCount || 0}`;
                break;
        }
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${service.className}</td>
            <td>${service.teacherName}</td>
            <td>${service.studentCount}</td>
            <td>${service.serviceType}<br><small>${extraInfo}</small></td>
            <td>${service.cost?.toLocaleString() || 0} تومان</td>
            <td>
                <button class="delete-btn" onclick="deleteService('${service.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// تابع حذف خدمت
function deleteService(serviceId) {
    if (confirm('آیا از حذف این مورد اطمینان دارید؟')) {
        let services = getAllServices();
        services = services.filter(service => service.id !== serviceId);
        localStorage.setItem('services', JSON.stringify(services));
        
        // به‌روزرسانی هر دو جدول
        updateServiceTable();
        updateAddServiceTable();
    }
}

// تابع نمایش جزئیات خدمت
function getServiceDetails(service) {
    switch (service.serviceType) {
        case 'جشن':
            return service.guestCount ? `تعداد مهمان: ${service.guestCount}` : '-';
        case 'سرود':
            return service.performedEvents?.length ? `تعداد اجراها: ${service.performedEvents.length}` : '-';
        case 'اطعام':
            return service.feedCount ? `تعداد اطعام: ${service.feedCount}` : '-';
        case 'پک همسایه':
            return service.packageCount ? `تعداد پک: ${service.packageCount}` : '-';
        default:
            return '-';
    }
}

// تابع نمایش/مخفی کردن فیلدهای اضافی
function toggleExtraFields() {
    const serviceType = document.getElementById('serviceType').value;
    const extraFields = document.getElementById('extraFields');
    const choirFields = document.getElementById('choirFields');
    const foodFields = document.getElementById('foodFields');
    const packageFields = document.getElementById('packageFields');
    const eventFields = document.getElementById('eventFields');
    
    // مخفی کردن همه فیلدهای اضافی
    extraFields.style.display = 'none';
    if (choirFields) choirFields.style.display = 'none';
    if (foodFields) foodFields.style.display = 'none';
    if (packageFields) packageFields.style.display = 'none';
    if (eventFields) eventFields.style.display = 'none';
    
    // نمایش فیلدهای مناسب بر اساس نوع خدمت
    if (serviceType) {
        extraFields.style.display = 'block';
        
        switch (serviceType) {
            case 'سرود':
                choirFields.style.display = 'block';
                populateEventSelects();
                break;
            case 'اطعام':
                foodFields.style.display = 'block';
                break;
            case 'پک همسایه':
                packageFields.style.display = 'block';
                break;
            case 'جشن':
                eventFields.style.display = 'block';
                break;
        }
    }
}

// تابع پر کردن انتخاب‌گر جشن‌ها
function populateEventSelects() {
    const eventSelects = document.querySelectorAll('.event-select');
    if (!eventSelects.length) return;
    
    // دریافت جشن‌های ذخیره شده
    const services = getAllServices();
    const events = services.filter(service => service.serviceType === 'جشن');
    
    // پاک کردن گزینه‌های فعلی به جز گزینه اول
    eventSelects.forEach(select => {
        const defaultOption = select.querySelector('option:first-child');
        select.innerHTML = '';
        select.appendChild(defaultOption);
        
        // اضافه کردن جشن‌ها به انتخاب‌گر
        events.forEach(event => {
            const option = document.createElement('option');
            option.value = event.id;
            option.textContent = `${event.className} - ${event.teacherName}`;
            select.appendChild(option);
        });
    });
}

// اضافه کردن رویداد به دکمه‌های اضافه کردن جشن
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('serviceForm');
    if (form) {
        // اضافه کردن رویداد به دکمه‌های اضافه کردن جشن
        document.querySelectorAll('.add-event-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const container = document.getElementById('eventsContainer');
                const newRow = document.createElement('div');
                newRow.className = 'event-item';
                newRow.innerHTML = `
                    <select class="event-select">
                        <option value="">انتخاب جشن</option>
                    </select>
                    <button type="button" class="small-btn remove-event-btn">-</button>
                `;
                container.appendChild(newRow);
                
                // اضافه کردن رویداد به دکمه حذف
                newRow.querySelector('.remove-event-btn').addEventListener('click', function() {
                    newRow.remove();
                });
                
                // به‌روزرسانی گزینه‌های انتخاب‌گر جدید
                populateEventSelects();
            });
        });
        
        // اضافه کردن رویداد submit به فرم
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع‌آوری داده‌های فرم
            const formData = new FormData(form);
            const serviceData = {};
            
            formData.forEach((value, key) => {
                serviceData[key] = value;
            });
            
            // اضافه کردن اطلاعات اضافی بر اساس نوع خدمت
            if (serviceData.serviceType === 'جشن') {
                serviceData.guestCount = document.getElementById('guestCount')?.value;
            } else if (serviceData.serviceType === 'سرود') {
                const eventSelects = document.querySelectorAll('.event-select');
                serviceData.performedEvents = Array.from(eventSelects)
                    .map(select => ({
                        id: select.value,
                        name: select.options[select.selectedIndex].text
                    }))
                    .filter(event => event.id);
            } else if (serviceData.serviceType === 'اطعام') {
                serviceData.feedCount = document.getElementById('feedCount')?.value;
            } else if (serviceData.serviceType === 'پک همسایه') {
                serviceData.packageCount = document.getElementById('packageCount')?.value;
            }
            
            // ذخیره اطلاعات
            const result = saveService(serviceData);
            
            if (result.success) {
                alert('اطلاعات با موفقیت ذخیره شد');
                form.reset();
                updateAddServiceTable();
                // به‌روزرسانی انتخاب‌گرهای جشن برای سرود
                populateEventSelects();
            } else {
                alert(result.message);
            }
        });
    }
    
    // به‌روزرسانی جدول در لود صفحه
    if (document.getElementById('serviceTableBody')) {
        updateAddServiceTable();
    }
    
    // به‌روزرسانی جدول پرزنت در لود صفحه
    if (document.getElementById('servicesTableBody')) {
        updateServiceTable();
    }
    
    // نمایش فیلدهای اضافی بر اساس نوع خدمت
    const serviceTypeSelect = document.getElementById('serviceType');
    if (serviceTypeSelect) {
        serviceTypeSelect.addEventListener('change', toggleExtraFields);
        toggleExtraFields(); // اجرای اولیه
    }
});

// تابع آماده‌سازی صفحه پرزنتیشن
function setupPresentation() {
    const services = getAllServices();
    
    // محاسبه آمار کلی
    const stats = {
        totalClasses: services.length,
        totalStudents: services.reduce((sum, s) => sum + Number(s.studentCount), 0),
        totalCost: services.reduce((sum, s) => sum + Number(s.cost), 0),
        totalEvents: services.filter(s => s.serviceType === 'جشن').length,
        totalGuests: services.filter(s => s.serviceType === 'جشن')
            .reduce((sum, s) => sum + Number(s.guestCount || 0), 0),
        totalChoirs: services.filter(s => s.serviceType === 'سرود').length,
        totalFeeds: services.filter(s => s.serviceType === 'اطعام')
            .reduce((sum, s) => sum + Number(s.feedCount || 0), 0),
        totalPackages: services.filter(s => s.serviceType === 'پک همسایه')
            .reduce((sum, s) => sum + Number(s.packageCount || 0), 0)
    };
    
    // به‌روزرسانی کارت‌های آمار
    Object.keys(stats).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'totalCost') {
                element.textContent = new Intl.NumberFormat('fa-IR').format(stats[key]);
            } else {
                element.textContent = stats[key];
            }
        }
    });
    
    // به‌روزرسانی نمودارها
    if (typeof setupCharts === 'function') {
        setupCharts(services);
    }
    
    // به‌روزرسانی جدول
    const tableBody = document.getElementById('servicesTableBody');
    if (tableBody) {
        tableBody.innerHTML = '';
        services.forEach((service, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${service.className}</td>
                <td>${service.teacherName}</td>
                <td>${service.serviceType}</td>
                <td>${service.studentCount}</td>
                <td>${new Intl.NumberFormat('fa-IR').format(service.cost)}</td>
                <td>${getServiceDetails(service)}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// اجرای تابع setupPresentation در صورتی که در صفحه پرزنتیشن هستیم
if (window.location.pathname.includes('presentation.html')) {
    setupPresentation();
}

document.addEventListener('DOMContentLoaded', function() {
    // اضافه کردن انیمیشن به دکمه‌ها
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // بررسی وجود لوگو و اضافه کردن لوگوی پیش‌فرض در صورت عدم وجود
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDc5NmIiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9IkFyaWFsIj7Yutiv24zYsTwvdGV4dD48L3N2Zz4=';
        };
    }
    
    // دکمه تمام صفحه حذف شده است
    
    // تنظیم حالت نمایش فیلدهای اضافی بر اساس نوع خدمت
    const serviceTypeSelect = document.getElementById('serviceType');
    if (serviceTypeSelect) {
        serviceTypeSelect.addEventListener('change', toggleExtraFields);
    }
    
    // اضافه کردن رویداد به دکمه اضافه کردن جشن
    const addEventBtns = document.querySelectorAll('.add-event-btn');
    addEventBtns.forEach(btn => {
        btn.addEventListener('click', addEventSelectRow);
    });
    
    // اجرای تابع آماده‌سازی صفحه
    initPage();
});

// تابع تمام صفحه کردن حذف شده است

// تابع آماده‌سازی صفحه
async function initPage() {
    try {
        // دریافت اطلاعات از localStorage
        const services = getAllServices();
        
        // به‌روزرسانی جدول
        if (document.getElementById('servicesTableBody')) {
            populateServicesTable(services);
        }
        
        // اگر در صفحه پرزنتیشن هستیم
        if (window.location.pathname.includes('presentation.html')) {
            setupPresentation(services);
        }
    
        // اضافه کردن رویداد به فرم
    const form = document.getElementById('serviceForm');
        if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // دریافت مقادیر فرم
                const formData = new FormData(form);
                const serviceData = {};
                
                formData.forEach((value, key) => {
                    serviceData[key] = value;
                });
        
                // اضافه کردن آیدی و تاریخ
                serviceData.id = Date.now();
                serviceData.date = new Date().toLocaleDateString('fa-IR');
        
        // نمایش پیام بارگذاری
        showMessage('در حال ذخیره اطلاعات...', 'info');
        
                // ذخیره در localStorage
                const result = saveService(serviceData);
                
                if (result.success) {
                    showMessage('اطلاعات با موفقیت ذخیره شد', 'success');
        form.reset();
        
        // به‌روزرسانی جدول
                    const updatedServices = getAllServices();
                    populateServicesTable(updatedServices);
        } else {
                    showMessage(result.message || 'خطا در ذخیره اطلاعات', 'error');
                }
            });
        }
    } catch (error) {
        console.error('Error in initPage:', error);
        showMessage('خطا در بارگذاری اطلاعات: ' + error.message, 'error');
    }
}

// اجرای تابع آماده‌سازی صفحه بعد از بارگذاری کامل
document.addEventListener('DOMContentLoaded', initPage);

document.addEventListener('DOMContentLoaded', function() {
    // مدیریت تب‌ها
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // دریافت داده‌ها
    const services = getAllServices();
    
    // به‌روزرسانی کارت‌های آماری
    document.getElementById('totalClasses').textContent = services.length;
    document.getElementById('totalStudents').textContent = services.reduce((sum, s) => sum + Number(s.studentCount), 0);
    document.getElementById('totalCost').textContent = new Intl.NumberFormat('fa-IR').format(
        services.reduce((sum, s) => sum + Number(s.cost), 0)
    );

    // آمار مربوط به انواع خدمات
    const events = services.filter(s => s.serviceType === 'جشن');
    document.getElementById('totalEvents').textContent = events.length;
    document.getElementById('totalGuests').textContent = events.reduce((sum, s) => sum + Number(s.guestCount || 0), 0);
    
    document.getElementById('totalChoirs').textContent = services.filter(s => s.serviceType === 'سرود').length;
    document.getElementById('totalFeeds').textContent = services.filter(s => s.serviceType === 'اطعام')
        .reduce((sum, s) => sum + Number(s.feedCount || 0), 0);
    document.getElementById('totalPackages').textContent = services.filter(s => s.serviceType === 'پک همسایه')
        .reduce((sum, s) => sum + Number(s.packageCount || 0), 0);

    // به‌روزرسانی جدول
    const tableBody = document.getElementById('servicesTableBody');
    if (tableBody) {
        services.forEach((service, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${service.className}</td>
                <td>${service.teacherName}</td>
                <td>${service.studentCount}</td>
                <td>${getServiceTypeDisplay(service)}</td>
                <td class="amount">${new Intl.NumberFormat('fa-IR').format(service.cost)} تومان</td>
            `;
            tableBody.appendChild(row);
        });
    }
    
    // رسم نمودارها
    if (services.length > 0) {
        // نمودار تعداد دانش‌آموزان
        new Chart(document.getElementById('studentCountChart'), {
            type: 'bar',
            data: {
                labels: services.map(s => s.className),
                datasets: [{
                    label: 'تعداد دانش‌آموزان',
                    data: services.map(s => s.studentCount),
                    backgroundColor: chartColors
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'تعداد دانش‌آموزان هر کلاس',
                        font: { size: 16 }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        // نمودار هزینه‌ها
        new Chart(document.getElementById('costChart'), {
            type: 'pie',
            data: {
                labels: services.map(s => s.className),
                datasets: [{
                    data: services.map(s => s.cost),
                    backgroundColor: chartColors
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'توزیع هزینه‌ها',
                        font: { size: 16 }
                    }
                }
            }
        });

        // نمودار نوع خدمات
        const serviceTypes = {};
        services.forEach(s => {
            serviceTypes[s.serviceType] = (serviceTypes[s.serviceType] || 0) + 1;
        });

        new Chart(document.getElementById('serviceTypeChart'), {
            type: 'doughnut',
            data: {
                labels: Object.keys(serviceTypes),
                datasets: [{
                    data: Object.values(serviceTypes),
                    backgroundColor: chartColors.slice(0, Object.keys(serviceTypes).length)
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'توزیع انواع خدمات',
                        font: { size: 16 }
                    }
                }
            }
        });

        // نمودار تعداد مهمان‌ها
        new Chart(document.getElementById('guestCountChart'), {
            type: 'bar',
            data: {
                labels: services.filter(s => s.guestCount).map(s => s.className),
                datasets: [{
                    label: 'تعداد مهمان‌ها',
                    data: services.filter(s => s.guestCount).map(s => s.guestCount),
                    backgroundColor: chartColors
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'تعداد مهمان‌ها در هر جشن',
                        font: { size: 16 }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // نمودار هزینه به ازای هر دانش‌آموز
        new Chart(document.getElementById('costPerStudentChart'), {
            type: 'bar',
            data: {
                labels: services.map(s => `کلاس ${s.className} (${s.teacherName})`),
                datasets: [{
                    label: 'هزینه سرانه (تومان)',
                    data: services.map(s => Math.round(s.cost / s.studentCount)),
                    backgroundColor: services.map((s, i) => chartColors[i]),
                    borderColor: services.map((s, i) => chartColors[i].replace('0.7', '1')),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'هزینه سرانه هر دانش‌آموز به تفکیک کلاس',
                        font: { size: 16 }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw;
                                const service = services[context.dataIndex];
                                return [
                                    `هزینه سرانه: ${new Intl.NumberFormat('fa-IR').format(value)} تومان`,
                                    `هزینه کل کلاس: ${new Intl.NumberFormat('fa-IR').format(service.cost)} تومان`,
                                    `تعداد دانش‌آموزان: ${service.studentCount} نفر`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'تومان'
                        },
                        ticks: {
                            callback: function(value) {
                                return new Intl.NumberFormat('fa-IR').format(value);
                            }
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });

        // نمودار تأثیر خدمات
        new Chart(document.getElementById('serviceImpactChart'), {
            type: 'bar',
            data: {
                labels: services.map(s => s.className),
                datasets: [
                    {
                        label: 'تعداد مهمان‌ها',
                        data: services.map(s => s.guestCount || 0),
                        backgroundColor: chartColors[0],
                        borderColor: chartColors[0].replace('0.7', '1'),
                        borderWidth: 1
                    },
                    {
                        label: 'تعداد افراد اطعام شده',
                        data: services.map(s => s.feedCount || 0),
                        backgroundColor: chartColors[1],
                        borderColor: chartColors[1].replace('0.7', '1'),
                        borderWidth: 1
                    },
                    {
                        label: 'تعداد پک‌های همسایه',
                        data: services.map(s => s.packageCount || 0),
                        backgroundColor: chartColors[2],
                        borderColor: chartColors[2].replace('0.7', '1'),
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'تأثیر خدمات بر جامعه هدف',
                        font: { size: 16 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'تعداد افراد'
                        }
                    }
                }
            }
        });
    }
});

// تابع نمایش نوع خدمت
function getServiceTypeDisplay(service) {
    switch (service.serviceType) {
        case 'جشن':
            return `جشن (تعداد مهمان: ${service.guestCount})`;
        case 'سرود':
            if (service.performedEvents && service.performedEvents.length > 0) {
                return `سرود (${service.performedEvents.map(e => e.name).join('، ')})`;
            }
            return 'سرود';
        case 'اطعام':
            return `اطعام (تعداد افراد: ${service.feedCount})`;
        case 'پک همسایه':
            return `پک همسایه (تعداد پک: ${service.packageCount})`;
        default:
            return service.serviceType;
    }
} 
