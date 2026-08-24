const DEFAULT_LOCALE = 'ru';
const FALLBACK_LOCALE = 'en';
const LOCALE_STORAGE_KEY = 'nzapret.webui.locale';
const SUPPORTED_LOCALES = ['ru', 'en', 'zh-TW'];

const translations = {
    ru: {
        aria: {
            sections: 'Разделы',
            language: 'Язык интерфейса'
        },
        nav: {
            runtime: 'Статус',
            tools: 'Настройки',
            logs: 'Логи'
        },
        common: {
            save: 'Сохранить',
            save_restart: 'Сохранить и перезапустить',
            reload: 'Обновить',
            add: 'Добавить',
            clear: 'Очистить',
            end: 'Вниз',
            live: 'LIVE',
            loading: 'Загрузка...',
            applying_changes: 'Применение изменений...',
            unknown: 'неизвестно',
            remove_domain: 'Удалить домен'
        },
        status: {
            checking: 'Проверка...',
            active: 'В работе',
            inactive: 'Остановлен',
            multi_pid: 'Несколько PID',
            error: 'Ошибка статуса',
            refresh_failed: 'Не удалось обновить статус',
            on: 'Вкл',
            off: 'Выкл',
            tg_port: 'Порт {{port}}',
            tg_port_cf: 'Порт {{port}} (CF)',
            labels: {
                private_dns: 'Частный DNS',
                telegram: 'Telegram',
                domains: 'Домены',
                google_domains: 'Google домены',
                personal_domains: 'Личные домены',
                ipv4_rules: 'Правила IPv4',
                ipv6_rules: 'Правила IPv6'
            }
        },
        actions: {
            start: 'Старт',
            stop: 'Стоп',
            restart: 'Перезапуск',
            update: 'Обновить',
            starting: 'Запуск nzapret...',
            stopping: 'Остановка nzapret...',
            restarting: 'Перезапуск nzapret...',
            updating_data: 'Обновление данных...',
            completed: 'Команда {{command}} выполнена'
        },
        user_list: {
            title: 'Персональный список доменов',
            subtitle: 'Добавляйте или удаляйте домены, затем нажимайте «Сохранить». Кнопка «Обновить» восстанавливает сохранённый список с устройства, а nfqws2 подхватывает изменения hostlist без перезапуска.',
            empty: 'Персональный список пока пуст. Добавьте домен ниже, чтобы включить его в активный hostlist.',
            quick_placeholder: 'Введите домен и нажмите Добавить',
            dirty_none: 'Несохранённых изменений нет.',
            dirty_unsaved: 'Есть несохранённые изменения. Нажмите «Сохранить», чтобы применить их.',
            binding_applied: 'Используется текущей конфигурацией.',
            binding_missing: 'Текущая конфигурация пока не ссылается на list-user.txt.',
            binding_unknown: 'Статус конфигурации недоступен.',
            load_failed: 'Не удалось загрузить персональный список',
            reloaded: 'Персональный список обновлён',
            comments_not_added: 'Комментарии здесь не поддерживаются',
            already_exists: 'Домен уже есть в списке',
            saving: 'Сохранение персональных доменов...',
            clearing: 'Очистка персональных доменов...',
            saved: 'Персональный список сохранён',
            cleared: 'Персональный список очищен'
        },
        tg: {
            title: 'Telegram',
            subtitle: 'Локальный MTProto-прокси для обхода блокировки Telegram. Подключите клиент кнопкой ниже.',
            open: 'Открыть в Telegram',
            copy_link: 'Копировать ссылку',
            regen: 'Сгенерировать новый secret',
            mtproto_title: 'Подключение MTProto',
            host: 'IP-адрес',
            port: 'Порт',
            secret: 'Secret',
            dc_title: 'Датацентры Telegram (DC → IP)',
            dc_hint: 'По одному правилу на строку, формат: номер:IP',
            dc_tooltip: 'Соответствие номера датацентра Telegram (DC) и IP-адреса сервера. Каждая строка: «номер:IP», например 4:149.154.167.220. Прокси по этим правилам направляет трафик к нужным серверам Telegram.\n\nЕсли у вас не работают медиа и работает CF-прокси, то попробуйте убрать строку 2:149.154.167.220',
            cf_title: 'Cloudflare Proxy',
            cf_enable: 'Включить CF-прокси',
            cf_custom: 'Свой домен',
            cf_custom_placeholder: 'example.com',
            cf_test: 'Тест CF-прокси',
            cf_testing: 'Проверка CF-прокси...',
            cf_test_ok: 'CF-прокси работает ({{domain}})',
            cf_test_fail: 'CF-прокси недоступен: {{error}}',
            preresolve_enable: 'Предрезолв маршрутов DC',
            preresolve_tooltip: 'Проверяет прямой путь к каждому датацентру при старте (и раз в 30 минут), чтобы первое подключение не ждало таймаут. Если прямой путь заблокирован — сразу выбирается запасной маршрут (CF/TCP).',
            dirty_none: 'Несохранённых изменений нет.',
            dirty_pending: 'Есть несохранённые изменения. Нажмите «Сохранить».',
            saving: 'Сохранение настроек Telegram...',
            saving_restart: 'Сохранение и перезапуск...',
            saved: 'Настройки Telegram сохранены',
            saved_restart: 'Настройки сохранены, служба перезапущена',
            regenerating: 'Генерация нового secret...',
            secret_regenerated: 'Сгенерирован новый secret',
            opening: 'Открытие Telegram...',
            opened: 'Открываю Telegram',
            copied: 'Ссылка скопирована',
            copy_failed: 'Не удалось скопировать ссылку',
            invalid_host: 'Укажите корректный IP-адрес',
            invalid_port: 'Порт должен быть числом 1–65535',
            invalid_dc: 'Неверное правило DC: {{line}}',
            invalid_domain: 'Некорректный домен'
        },
        private_dns: {
            title: 'Частный DNS',
            subtitle_html: 'Управление Частным DNS в системе Android. При первом запуске службы nzapret автоматически установит <code>{{default_hostname}}</code>, если на устройстве ещё не задан другой DNS-провайдер.',
            off_label: 'Выкл',
            off_meta: 'Отключить Частный DNS для системного резолвера Android.',
            auto_label: 'Авто',
            auto_meta: 'Позволить Android использовать шифрованный DNS, если он поддерживается текущей сетью.',
            default_meta: 'Сразу применить провайдера по умолчанию для nzapret.',
            hostname_placeholder: 'dns.example.com',
            apply_hostname: 'Применить адрес',
            status_initial: 'Статус Частного DNS появится здесь после первого обновления.',
            status_unavailable: 'Управление Частным DNS недоступно, потому что в этой сборке Android отсутствует команда settings.',
            status_init_pending: 'При первом запуске службы nzapret выставит {{default_hostname}}, если уже не настроен другой DNS-провайдер.',
            status_off: 'Частный DNS отключён для системного резолвера Android.',
            status_default_active: '{{hostname}} активен как провайдер по умолчанию для nzapret. Изменения применяются сразу.',
            status_custom_active: 'Сейчас активен пользовательский провайдер {{hostname}}. Изменения применяются сразу.',
            status_custom_unspecified: 'Сейчас активен пользовательский адрес провайдера. Изменения применяются сразу.',
            status_auto: 'В автоматическом режиме Android использует шифрованный DNS, если он поддерживается текущей сетью. Изменения применяются сразу.',
            updated: 'Частный DNS обновлён',
            invalid_hostname: 'Введите корректный адрес DNS-провайдера',
            loading_disable: 'Отключение Частного DNS...',
            loading_auto: 'Переключение Частного DNS в автоматический режим...',
            loading_default: 'Применение {{hostname}}...',
            loading_hostname: 'Применение адреса Частного DNS...',
            mode_off: 'Выкл',
            mode_auto: 'Авто',
            mode_provider: 'DNS-провайдер',
            unavailable_short: 'Недоступно'
        },
        diagnostics: {
            title: 'Диагностика',
            subtitle: 'Проверьте текущее состояние рантайма до того, как уходить в сырые логи.',
            run: 'Запустить диагностику',
            running: 'Диагностика...',
            overlay_running: 'Выполняется диагностика...',
            failed: 'Диагностика завершилась с ошибкой',
            completed: 'Диагностика завершена',
            error: 'Ошибка диагностики: {{message}}',
            empty_title: 'Снимок диагностики пока не создан',
            empty_text: 'Запустите проверку, чтобы подтвердить работу процесса, цепочки фаервола и другие показатели работы перед разбором сырых логов.',
            summary: '{{passed}} · {{failed}} / {{total}}',
            summary_passed: 'Успешно: {{ok}}',
            summary_failed: 'С ошибкой: {{fail}}',
            expanded: 'Подробный список раскрыт',
            collapsed: 'Подробный список скрыт',
            show_details: 'Показать детали ({{count}})',
            hide_details: 'Скрыть детали',
            names: {
                process: 'Процесс {{subject}}',
                userlist_binding: 'Привязка list-user',
                ip_stack: 'IP-стек',
                private_dns: 'Частный DNS',
                routing_ipv4: 'Маршрутизация IPv4',
                routing_ipv6: 'Маршрутизация IPv6'
            },
            details: {
                command_available: 'команда доступна',
                command_missing: 'команда отсутствует',
                ip6tables_available: 'команда доступна',
                ip6tables_unusable: 'присутствует, но не работает',
                ip6tables_missing_fallback: 'команда отсутствует, фаервол только для IPv4',
                runtime_file_present: 'файл присутствует',
                runtime_file_missing: 'файл отсутствует',
                process_running: 'запущен (pid: {{pid}})',
                process_not_running: 'не запущен',
                userlist_attached: 'текущая конфигурация использует list-user.txt',
                userlist_detached: 'текущая конфигурация не ссылается на list-user.txt',
                stack_ipv4_only: 'Только IPv4',
                stack_dual: 'IPv4 + IPv6',
                private_dns_unavailable: 'команда settings отсутствует',
                private_dns_off: 'Выкл',
                private_dns_auto: 'Авто',
                private_dns_hostname_default: 'провайдер по умолчанию ({{hostname}})',
                private_dns_hostname_custom: 'пользовательский провайдер ({{hostname}})',
                private_dns_hostname_unspecified: 'адрес провайдера',
                jump_present: 'переход присутствует',
                jump_missing: 'переход отсутствует',
                jump_skipped_no_ipv6: 'пропущено (фаервол только для IPv4)',
                routing_ok: 'маршрут доступен',
                routing_fail: 'проверка маршрута завершилась с ошибкой',
                routing_unavailable: 'недоступно в этой сети'
            }
        },
        logs: {
            title: 'Логи',
            runtime_meta: 'stdout / stderr nfqws2',
            nztg_meta: 'stdout / stderr nztg (Telegram)',
            runtime_tab: 'nfqws2',
            nztg_tab: 'nztg',
            events_tab: 'События',
            loading_runtime: 'Загрузка лога работы...',
            runtime_empty: 'Лог работы пуст.',
            events_empty: 'События пока не записаны.',
            event_history: 'История событий',
            clear_events: 'Очистить',
            clearing_events: 'Очистка истории событий...',
            cleared_events: 'История событий очищена',
            clear_failed: 'Не удалось очистить: {{message}}'
        },
        generic: {
            error_with_message: 'Ошибка: {{message}}'
        },
        counts: {
            domains: {
                one: '{{count}} домен',
                few: '{{count}} домена',
                many: '{{count}} доменов',
                other: '{{count}} домена'
            },
            events: {
                one: '{{count}} событие',
                few: '{{count}} события',
                many: '{{count}} событий',
                other: '{{count}} события'
            },
            lines: {
                one: '{{count}} строка',
                few: '{{count}} строки',
                many: '{{count}} строк',
                other: '{{count}} строки'
            },
            entries: {
                one: '{{count}} запись',
                few: '{{count}} записи',
                many: '{{count}} записей',
                other: '{{count}} записи'
            }
        }
    },
    en: {
        aria: {
            sections: 'Sections',
            language: 'Interface language'
        },
        nav: {
            runtime: 'Runtime',
            tools: 'Settings',
            logs: 'Logs'
        },
        common: {
            save: 'Save',
            save_restart: 'Save & Restart',
            reload: 'Reload',
            add: 'Add',
            clear: 'Clear',
            end: 'End',
            live: 'LIVE',
            loading: 'Loading...',
            applying_changes: 'Applying changes...',
            unknown: 'unknown',
            remove_domain: 'Remove domain'
        },
        status: {
            checking: 'Checking...',
            active: 'Active',
            inactive: 'Inactive',
            multi_pid: 'Multi-PID',
            error: 'Status Error',
            refresh_failed: 'Status refresh failed',
            on: 'On',
            off: 'Off',
            tg_port: 'Port {{port}}',
            tg_port_cf: 'Port {{port}} (CF)',
            labels: {
                private_dns: 'Private DNS',
                telegram: 'Telegram',
                domains: 'Domains',
                google_domains: 'Google Domains',
                personal_domains: 'Personal Domains',
                ipv4_rules: 'IPv4 Rules',
                ipv6_rules: 'IPv6 Rules'
            }
        },
        actions: {
            start: 'Start',
            stop: 'Stop',
            restart: 'Restart',
            update: 'Update',
            starting: 'Starting nzapret...',
            stopping: 'Stopping nzapret...',
            restarting: 'Restarting nzapret...',
            updating_data: 'Updating data...',
            completed: '{{command}} completed'
        },
        user_list: {
            title: 'Personal Domain List',
            subtitle: 'Add or remove domains, then tap Save. Reload restores the saved list from the device, and nfqws2 will pick hostlist changes up without a restart.',
            empty: 'No personal domains yet. Add one below to include it in the active hostlist.',
            quick_placeholder: 'Add one domain, then tap Add',
            dirty_none: 'No unsaved changes.',
            dirty_unsaved: 'Unsaved changes. Press Save to apply them.',
            binding_applied: 'Applied by the current configuration.',
            binding_missing: 'Current configuration does not reference list-user.txt yet.',
            binding_unknown: 'Configuration status unavailable.',
            load_failed: 'Failed to load personal list',
            reloaded: 'Personal list reloaded',
            comments_not_added: 'Comments are not added here',
            already_exists: 'Domain already in list',
            saving: 'Saving personal domains...',
            clearing: 'Clearing personal domains...',
            saved: 'Personal list saved',
            cleared: 'Personal list cleared'
        },
        tg: {
            title: 'Telegram',
            subtitle: 'Local MTProto proxy to bypass Telegram blocking. Connect your client with the button below.',
            open: 'Open in Telegram',
            copy_link: 'Copy link',
            regen: 'Generate a new secret',
            mtproto_title: 'MTProto connection',
            host: 'IP address',
            port: 'Port',
            secret: 'Secret',
            dc_title: 'Telegram datacenters (DC → IP)',
            dc_hint: 'One rule per line, format: number:IP',
            dc_tooltip: 'Maps a Telegram datacenter number (DC) to a server IP. Each line is "number:IP", e.g. 4:149.154.167.220. The proxy routes traffic to the right Telegram servers by these rules.\n\nIf media does not load while the CF proxy works, try removing the 2:149.154.167.220 line.',
            cf_title: 'Cloudflare Proxy',
            cf_enable: 'Enable CF proxy',
            cf_custom: 'Custom domain',
            cf_custom_placeholder: 'example.com',
            cf_test: 'Test CF proxy',
            cf_testing: 'Testing CF proxy...',
            cf_test_ok: 'CF proxy works ({{domain}})',
            cf_test_fail: 'CF proxy unavailable: {{error}}',
            preresolve_enable: 'Pre-resolve DC routes',
            preresolve_tooltip: 'Probes the direct path to each datacenter at startup (and every 30 minutes) so the first connection does not wait out the dial timeout. If the direct path is blocked, the fallback route (CF/TCP) is selected right away.',
            dirty_none: 'No unsaved changes.',
            dirty_pending: 'Unsaved changes. Press Save.',
            saving: 'Saving Telegram settings...',
            saving_restart: 'Saving and restarting...',
            saved: 'Telegram settings saved',
            saved_restart: 'Settings saved, service restarted',
            regenerating: 'Generating a new secret...',
            secret_regenerated: 'New secret generated',
            opening: 'Opening Telegram...',
            opened: 'Opening Telegram',
            copied: 'Link copied',
            copy_failed: 'Failed to copy link',
            invalid_host: 'Enter a valid IP address',
            invalid_port: 'Port must be a number 1–65535',
            invalid_dc: 'Invalid DC rule: {{line}}',
            invalid_domain: 'Invalid domain'
        },
        private_dns: {
            title: 'Private DNS',
            subtitle_html: 'Manage Android system Private DNS. nzapret will initialize <code>{{default_hostname}}</code> on the first service start unless the device already uses another provider hostname.',
            off_label: 'Off',
            off_meta: 'Disable Private DNS for the Android system resolver.',
            auto_label: 'Automatic',
            auto_meta: 'Let Android use encrypted DNS when the active network supports it.',
            default_meta: 'Apply the nzapret default provider hostname right away.',
            hostname_placeholder: 'dns.example.com',
            apply_hostname: 'Apply Hostname',
            status_initial: 'Private DNS status will appear here after the first refresh.',
            status_unavailable: 'Private DNS controls are unavailable because the Android settings command is missing on this build.',
            status_init_pending: 'nzapret will initialize {{default_hostname}} on the first service start unless another provider hostname is already configured.',
            status_off: 'Private DNS is disabled for the Android system resolver.',
            status_default_active: '{{hostname}} is active as the nzapret default provider. Changes apply immediately.',
            status_custom_active: 'Custom provider {{hostname}} is active. Changes apply immediately.',
            status_custom_unspecified: 'Custom provider hostname is active. Changes apply immediately.',
            status_auto: 'Automatic mode lets Android use encrypted DNS when the active network supports it. Changes apply immediately.',
            updated: 'Private DNS updated',
            invalid_hostname: 'Enter a valid provider hostname',
            loading_disable: 'Disabling Private DNS...',
            loading_auto: 'Switching Private DNS to automatic mode...',
            loading_default: 'Applying {{hostname}}...',
            loading_hostname: 'Applying Private DNS hostname...',
            mode_off: 'Off',
            mode_auto: 'Automatic',
            mode_provider: 'Provider hostname',
            unavailable_short: 'Unavailable'
        },
        diagnostics: {
            title: 'Diagnostics',
            subtitle: 'Inspect current runtime state before diving into raw logs.',
            run: 'Run Diagnose',
            running: 'Running Diagnose...',
            overlay_running: 'Running diagnostics...',
            failed: 'Diagnostics failed',
            completed: 'Diagnostics completed',
            error: 'Diagnostics error: {{message}}',
            empty_title: 'No diagnostic snapshot yet',
            empty_text: 'Run a health check to confirm the process, firewall chains, and other live signals before chasing raw output.',
            summary: '{{passed}} · {{failed}} / {{total}}',
            summary_passed: '{{ok}} passed',
            summary_failed: '{{fail}} failed',
            expanded: 'Detailed checklist expanded',
            collapsed: 'Detailed checklist hidden',
            show_details: 'Show Details ({{count}})',
            hide_details: 'Hide Details',
            names: {
                process: '{{subject}} process',
                userlist_binding: 'list-user binding',
                ip_stack: 'IP stack',
                private_dns: 'private dns',
                routing_ipv4: 'IPv4 routing',
                routing_ipv6: 'IPv6 routing'
            },
            details: {
                command_available: 'command available',
                command_missing: 'command missing',
                ip6tables_available: 'command available',
                ip6tables_unusable: 'present but unusable',
                ip6tables_missing_fallback: 'missing, IPv4-only firewall',
                runtime_file_present: 'file present',
                runtime_file_missing: 'file missing',
                process_running: 'running (pid: {{pid}})',
                process_not_running: 'not running',
                userlist_attached: 'current configuration includes list-user.txt',
                userlist_detached: 'current configuration does not reference list-user.txt',
                stack_ipv4_only: 'IPv4 only',
                stack_dual: 'IPv4 + IPv6',
                private_dns_unavailable: 'settings command missing',
                private_dns_off: 'Off',
                private_dns_auto: 'Automatic',
                private_dns_hostname_default: 'Provider hostname ({{hostname}})',
                private_dns_hostname_custom: 'Provider hostname ({{hostname}})',
                private_dns_hostname_unspecified: 'Provider hostname',
                jump_present: 'jump present',
                jump_missing: 'jump missing',
                jump_skipped_no_ipv6: 'skipped (IPv4-only firewall)',
                routing_ok: 'route lookup works',
                routing_fail: 'route lookup failed',
                routing_unavailable: 'not available on this network'
            }
        },
        logs: {
            title: 'Logs',
            runtime_meta: 'nfqws2 stdout / stderr',
            nztg_meta: 'nztg (Telegram) stdout / stderr',
            runtime_tab: 'nfqws2',
            nztg_tab: 'nztg',
            events_tab: 'Events',
            loading_runtime: 'Loading runtime log...',
            runtime_empty: 'Runtime log is empty.',
            events_empty: 'No events recorded yet.',
            event_history: 'Event history',
            clear_events: 'Clear Events',
            clearing_events: 'Clearing event history...',
            cleared_events: 'Event history cleared',
            clear_failed: 'Clear failed: {{message}}'
        },
        generic: {
            error_with_message: 'Error: {{message}}'
        },
        counts: {
            domains: {
                one: '{{count}} domain',
                other: '{{count}} domains'
            },
            events: {
                one: '{{count}} event',
                other: '{{count}} events'
            },
            lines: {
                one: '{{count}} line',
                other: '{{count}} lines'
            },
            entries: {
                one: '{{count}} entry',
                other: '{{count}} entries'
            }
        }
    }
,
    'zh-TW': {
        aria: {
            sections: '區塊',
            language: '介面語言'
        },
        nav: {
            runtime: '狀態',
            tools: '設定',
            logs: '日誌'
        },
        common: {
            save: '儲存',
            save_restart: '儲存並重新啟動',
            reload: '重新載入',
            add: '新增',
            clear: '清除',
            end: '到底部',
            live: '即時',
            loading: '載入中...',
            applying_changes: '套用變更中...',
            unknown: '未知',
            remove_domain: '移除網域'
        },
        status: {
            checking: '檢查中...',
            active: '執行中',
            inactive: '已停止',
            multi_pid: '多個 PID',
            error: '狀態錯誤',
            refresh_failed: '狀態重新整理失敗',
            on: '開啟',
            off: '關閉',
            tg_port: '通訊埠 {{port}}',
            tg_port_cf: '通訊埠 {{port}} (CF)',
            labels: {
                private_dns: '私人 DNS',
                telegram: 'Telegram',
                domains: '網域',
                google_domains: 'Google 網域',
                personal_domains: '個人網域',
                ipv4_rules: 'IPv4 規則',
                ipv6_rules: 'IPv6 規則'
            }
        },
        actions: {
            start: '啟動',
            stop: '停止',
            restart: '重新啟動',
            update: '更新',
            starting: '正在啟動 nzapret...',
            stopping: '正在停止 nzapret...',
            restarting: '正在重新啟動 nzapret...',
            updating_data: '正在更新資料...',
            completed: '{{command}} 完成'
        },
        user_list: {
            title: '個人網域清單',
            subtitle: '新增或移除網域，然後點擊「儲存」。點擊「重新載入」可從裝置還原已儲存的清單。nfqws2 會自動套用變更而無需重新啟動。',
            empty: '目前沒有個人網域。在下方新增網域以將其加入至作用中的主機清單。',
            quick_placeholder: '新增一個網域，然後點擊「新增」',
            dirty_none: '沒有未儲存的變更。',
            dirty_unsaved: '有未儲存的變更。請按下「儲存」以套用。',
            binding_applied: '已由目前的設定套用。',
            binding_missing: '目前的設定尚未參照 list-user.txt。',
            binding_unknown: '設定狀態無法取得。',
            load_failed: '無法載入個人清單',
            reloaded: '已重新載入個人清單',
            comments_not_added: '註解不會在這裡加入',
            already_exists: '網域已存在於清單中',
            saving: '正在儲存個人網域...',
            clearing: '正在清除個人網域...',
            saved: '個人清單已儲存',
            cleared: '個人清單已清除'
        },
        tg: {
            title: 'Telegram',
            subtitle: '用來繞過 Telegram 封鎖的本地 MTProto 代理伺服器。點擊下方的按鈕連接您的用戶端。',
            open: '在 Telegram 中開啟',
            copy_link: '複製連結',
            regen: '產生新金鑰 (Secret)',
            mtproto_title: 'MTProto 連線',
            host: 'IP 位址',
            port: '通訊埠',
            secret: '金鑰 (Secret)',
            dc_title: 'Telegram 資料中心 (DC → IP)',
            dc_hint: '每行一條規則，格式為: 編號:IP',
            dc_tooltip: '將 Telegram 資料中心編號 (DC) 對應至伺服器 IP。每行為「編號:IP」，例如 4:149.154.167.220。代理伺服器將根據這些規則將流量路由至正確的 Telegram 伺服器。\n\n如果 CF 代理伺服器運作正常但無法載入媒體，請嘗試移除 2:149.154.167.220 這行。',
            cf_title: 'Cloudflare 代理伺服器',
            cf_enable: '啟用 CF 代理伺服器',
            cf_custom: '自訂網域',
            cf_custom_placeholder: 'example.com',
            cf_test: '測試 CF 代理伺服器',
            cf_testing: '正在測試 CF 代理伺服器...',
            cf_test_ok: 'CF 代理伺服器運作正常 ({{domain}})',
            cf_test_fail: 'CF 代理伺服器無法使用：{{error}}',
            preresolve_enable: '預先解析 DC 路由',
            preresolve_tooltip: '在啟動時（以及每 30 分鐘）測試到每個資料中心的直接路徑，以避免第一次連線等待逾時。如果直接路徑被封鎖，將會立即選擇備用路由 (CF/TCP)。',
            dirty_none: '沒有未儲存的變更。',
            dirty_pending: '有未儲存的變更。請按下「儲存」。',
            saving: '正在儲存 Telegram 設定...',
            saving_restart: '儲存並重新啟動...',
            saved: 'Telegram 設定已儲存',
            saved_restart: '設定已儲存，服務已重新啟動',
            regenerating: '正在產生新金鑰 (Secret)...',
            secret_regenerated: '新金鑰已產生',
            opening: '正在開啟 Telegram...',
            opened: '正在開啟 Telegram',
            copied: '已複製連結',
            copy_failed: '無法複製連結',
            invalid_host: '請輸入有效的 IP 位址',
            invalid_port: '通訊埠必須為 1 到 65535 之間的數字',
            invalid_dc: '無效的 DC 規則：{{line}}',
            invalid_domain: '無效的網域'
        },
        private_dns: {
            title: '私人 DNS',
            subtitle_html: '管理 Android 系統的私人 DNS。除非裝置已經使用了其他的 DNS 供應商，否則 nzapret 會在服務首次啟動時套用 <code>{{default_hostname}}</code>。',
            off_label: '關閉',
            off_meta: '停用 Android 系統解析器的私人 DNS。',
            auto_label: '自動',
            auto_meta: '允許 Android 在目前網路支援時使用加密 DNS。',
            default_meta: '立即套用 nzapret 預設的提供者主機名稱。',
            hostname_placeholder: 'dns.example.com',
            apply_hostname: '套用主機名稱',
            status_initial: '私人 DNS 狀態將在第一次重新整理後顯示於此處。',
            status_unavailable: '目前版本的 Android 設定命令不存在，無法控制私人 DNS。',
            status_init_pending: '除非已經設定了其他的供應商主機名稱，否則 nzapret 會在服務首次啟動時套用 {{default_hostname}}。',
            status_off: '已停用 Android 系統解析器的私人 DNS。',
            status_default_active: '{{hostname}} 是目前的 nzapret 預設提供者。變更會立即套用。',
            status_custom_active: '自訂的提供者 {{hostname}} 正在使用中。變更會立即套用。',
            status_custom_unspecified: '自訂的提供者主機名稱正在使用中。變更會立即套用。',
            status_auto: '自動模式，允許 Android 在目前網路支援時使用加密 DNS。變更會立即套用。',
            updated: '私人 DNS 已更新',
            invalid_hostname: '請輸入有效的供應商主機名稱',
            loading_disable: '正在停用私人 DNS...',
            loading_auto: '正在將私人 DNS 切換為自動模式...',
            loading_default: '正在套用 {{hostname}}...',
            loading_hostname: '正在套用私人 DNS 主機名稱...',
            mode_off: '關閉',
            mode_auto: '自動',
            mode_provider: '供應商主機名稱',
            unavailable_short: '無法使用'
        },
        diagnostics: {
            title: '診斷',
            subtitle: '在查看原始日誌之前，先檢查目前的執行狀態。',
            run: '執行診斷',
            running: '正在執行診斷...',
            overlay_running: '正在執行診斷...',
            failed: '診斷失敗',
            completed: '診斷完成',
            error: '診斷錯誤：{{message}}',
            empty_title: '目前尚無診斷快照',
            empty_text: '執行健康檢查以確認程序、防火牆鏈以及其他即時訊號，然後再查看原始輸出。',
            summary: '{{passed}} 個通過 · {{failed}} 個失敗 / 共 {{total}} 個',
            summary_passed: '{{ok}} 個通過',
            summary_failed: '{{fail}} 個失敗',
            expanded: '已展開詳細清單',
            collapsed: '已隱藏詳細清單',
            show_details: '顯示詳細資訊 ({{count}})',
            hide_details: '隱藏詳細資訊',
            names: {
                process: '{{subject}} 程序',
                userlist_binding: 'list-user 綁定',
                ip_stack: 'IP 堆疊',
                private_dns: '私人 DNS',
                routing_ipv4: 'IPv4 路由',
                routing_ipv6: 'IPv6 路由'
            },
            details: {
                command_available: '命令可使用',
                command_missing: '命令遺失',
                ip6tables_available: '命令可使用',
                ip6tables_unusable: '存在但無法使用',
                ip6tables_missing_fallback: '遺失，僅支援 IPv4 防火牆',
                runtime_file_present: '檔案存在',
                runtime_file_missing: '檔案遺失',
                process_running: '執行中 (pid: {{pid}})',
                process_not_running: '未執行',
                userlist_attached: '目前的設定已包含 list-user.txt',
                userlist_detached: '目前的設定未參照 list-user.txt',
                stack_ipv4_only: '僅 IPv4',
                stack_dual: 'IPv4 + IPv6',
                private_dns_unavailable: '設定命令遺失',
                private_dns_off: '關閉',
                private_dns_auto: '自動',
                private_dns_hostname_default: '供應商主機名稱 ({{hostname}})',
                private_dns_hostname_custom: '供應商主機名稱 ({{hostname}})',
                private_dns_hostname_unspecified: '供應商主機名稱',
                jump_present: '跳轉規則 (jump) 存在',
                jump_missing: '跳轉規則 (jump) 遺失',
                jump_skipped_no_ipv6: '已略過 (僅支援 IPv4 防火牆)',
                routing_ok: '路由查詢運作正常',
                routing_fail: '路由查詢失敗',
                routing_unavailable: '此網路上無法使用'
            }
        },
        logs: {
            title: '日誌',
            runtime_meta: 'nfqws2 stdout / stderr',
            nztg_meta: 'nztg (Telegram) stdout / stderr',
            runtime_tab: 'nfqws2',
            nztg_tab: 'nztg',
            events_tab: '事件',
            loading_runtime: '正在載入執行日誌...',
            runtime_empty: '執行日誌為空。',
            events_empty: '目前尚無事件紀錄。',
            event_history: '事件歷史紀錄',
            clear_events: '清除事件',
            clearing_events: '正在清除事件歷史紀錄...',
            cleared_events: '事件歷史紀錄已清除',
            clear_failed: '清除失敗：{{message}}'
        },
        generic: {
            error_with_message: '錯誤：{{message}}'
        },
        counts: {
            domains: {
                one: '{{count}} 個網域',
                other: '{{count}} 個網域'
            },
            events: {
                one: '{{count}} 個事件',
                other: '{{count}} 個事件'
            },
            lines: {
                one: '{{count}} 行',
                other: '{{count}} 行'
            },
            entries: {
                one: '{{count}} 筆項目',
                other: '{{count}} 筆項目'
            }
        }
    }

};

let currentLocale = DEFAULT_LOCALE;

function resolveLocale(locale) {
    return SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

function getValue(locale, key) {
    return key.split('.').reduce((acc, part) => {
        if (acc && typeof acc === 'object' && part in acc) {
            return acc[part];
        }
        return undefined;
    }, translations[locale]);
}

function interpolate(template, params = {}) {
    return String(template).replace(/\{\{(\w+)\}\}/g, (_, key) => {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            return String(params[key]);
        }
        return '';
    });
}

function getPluralRules(locale) {
    return new Intl.PluralRules(locale);
}

function getStoredLocale() {
    try {
        return localStorage.getItem(LOCALE_STORAGE_KEY) || '';
    } catch (error) {
        return '';
    }
}

function setStoredLocale(locale) {
    try {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (error) {
        // Ignore storage errors in restrictive WebViews.
    }
}

function messageForLocale(locale, key) {
    return getValue(locale, key) ?? getValue(FALLBACK_LOCALE, key);
}

function formatNumber(value) {
    const number = Number(value);
    const safeNumber = Number.isFinite(number) ? number : 0;
    return new Intl.NumberFormat(currentLocale).format(safeNumber);
}

function t(key, params = {}) {
    const value = messageForLocale(currentLocale, key);
    if (typeof value === 'undefined') {
        return key;
    }
    if (typeof value === 'object') {
        return interpolate(value.other ?? key, params);
    }
    return interpolate(value, params);
}

function tc(key, count, params = {}) {
    const value = messageForLocale(currentLocale, key);
    if (!value || typeof value !== 'object') {
        return t(key, params);
    }

    const rule = getPluralRules(currentLocale).select(Number(count));
    const template = value[rule] ?? value.other ?? Object.values(value)[0] ?? key;
    return interpolate(template, {
        count: formatNumber(count),
        raw_count: String(count),
        ...params
    });
}

function applyStaticTranslations(root = document, params = {}) {
    root.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = t(element.dataset.i18n, params);
    });

    // Only use data-i18n-html for trusted built-in markup. It writes via innerHTML
    // and must never receive user-controlled content or unreviewed translation HTML.
    root.querySelectorAll('[data-i18n-html]').forEach((element) => {
        element.innerHTML = t(element.dataset.i18nHtml, params);
    });

    root.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        element.placeholder = t(element.dataset.i18nPlaceholder, params);
    });

    root.querySelectorAll('[data-i18n-title]').forEach((element) => {
        element.title = t(element.dataset.i18nTitle, params);
    });

    root.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel, params));
    });
}

function initializeLocale() {
    currentLocale = resolveLocale(getStoredLocale() || DEFAULT_LOCALE);
    document.documentElement.lang = currentLocale;
    return currentLocale;
}

function setLocale(locale) {
    currentLocale = resolveLocale(locale);
    setStoredLocale(currentLocale);
    document.documentElement.lang = currentLocale;
    return currentLocale;
}

function getLocale() {
    return currentLocale;
}

export {
    DEFAULT_LOCALE,
    LOCALE_STORAGE_KEY,
    SUPPORTED_LOCALES,
    applyStaticTranslations,
    formatNumber,
    getLocale,
    initializeLocale,
    setLocale,
    t,
    tc
};
