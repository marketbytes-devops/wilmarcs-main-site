            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex justify-between items-center space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Change Password</h4>
                        <a href="<?= base_url(); ?>backend/content" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                    </div>
                    <label class="block errmsg"><?= @session()->getFlashdata('msg').((!empty($validation))?alerttag($validation->listErrors(),'red'):''); ?></label>
                    <form action="" method="post" class="px-6 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400">Current Password</span>
                            <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="currentpass" type="password" required>
                        </label>
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400">New Password</span>
                            <input class="newpass block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="newpass" type="password" required>
                        </label>
                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Confirm Password</span>
                            <input class="conpass block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="confirmpass" type="password" required>
                        </label>
                        <div class="text-right">
                            <button type="submit" class="px-5 py-3 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
        <script>
            $(".conpass").on('input',function(e) {
                if($(this).val()!=$('.newpass').val()){
                    $('.errmsg').html('<?= alerttag('The confirm password field does not match the new password field.','red'); ?>')
                }
                else{
                    $('.errmsg').html('');
                }
            });
        </script>