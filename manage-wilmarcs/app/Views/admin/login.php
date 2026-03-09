<!DOCTYPE html>
<html lang="en" class="theme-dark">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Login - Wilmarcs</title>
    <link rel="shortcut icon" href="<?= base_url(); ?>/assets/img/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css">
    <link rel="stylesheet" href="<?= base_url(); ?>/assets/css/tailwind.output.css">
    <link rel="stylesheet" href="<?= base_url(); ?>/assets/css/admin.css">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
    <script src="<?= base_url(); ?>/assets/admin/js/init-alpine.js"></script>
</head>
<body>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-1 flex-col items-center h-full max-w-4xl mx-auto">
            <img class="inline sm:w-1/4 w-1/2 mb-10" src="<?= base_url(); ?>/assets/img/logo-w.png" alt="logo">
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden bg-white dark:bg-gray-700 rounded-lg shadow-xl">
                <form autocomplete="off" action="<?= base_url('manage'); ?>" method="post" class="w-full">
                    <label class="block text-sm"><?= @session()->getFlashdata('msg'); ?></label>
                    <input type="hidden" id="token" name="token">
                    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                    <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">Username</span>
                        <input autofocus tabindex="1" class="block w-full h-10 mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:shadow-outline-gray focus:border-red-900 focus:outline-none focus:shadow-outline-red form-input" name="uname" required/>
                    </label>
                    <label class="block mt-4 text-sm">
                        <span class="text-gray-700 dark:text-gray-400">Password</span>
                        <input tabindex="2" class="block w-full h-10 mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:shadow-outline-gray focus:border-red-900 focus:outline-none focus:shadow-outline-red form-input" type="password" name="pass" required/>
                    </label>
                    <button type="submit" tabindex="3" class="block w-full px-4 py-3 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 dark:bg-red-700 border border-transparent rounded-lg active:bg-red-800 hover:bg-red-800 focus:outline-none focus:shadow-outline-red">Log in</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
