// تنظیمات گوگل شیت
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxE5m4vVlYcmXAcZO7RBaLGEApUUSzUjgZda_UE4TqLcb6s9uqiIFM1kThZVEms8kLB/exec';

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

// تابع دریافت همه خدمات
function getAllServices() {
    try {
        return JSON.parse(localStorage.getItem('services')) || [];
    } catch (error) {
        console.error('Error getting services:', error);
        return [];
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