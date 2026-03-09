            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex justify-between items-center space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300"><?= (!empty($services))?'Edit':'New'; ?> Service</h4>
                        <a href="<?= base_url(); ?>/backend/services" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                    </div>
                    <label class="block"><?= @session()->getFlashdata('msg').((!empty($validation))?alerttag($validation->listErrors(),'red'):''); ?></label>
                    <form action="" method="post" class="px-6 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800 bannerfrm" enctype="multipart/form-data">
                        <input type="hidden" name="sid" value="<?= (@$services->sid>0)?$services->sid:''; ?>">
                        <label class="block text-sm mb-4">
                            <span class="reqinp text-gray-700 dark:text-gray-400">Category</span>
                            <select name="category" class="select2 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" required>
                                <option value="" selected disabled hidden>Select Category</option>
                                <?php if(!empty($category)){ foreach ($category as $key => $value) { ?>
                                <option value="<?= @$value->cid; ?>"<?= (@$value->cid==((set_value('category')!='')?set_value('category'):@$services->fkcid))?' selected':''; ?>><?= @$value->cname; ?></option>
                                <?php } } ?>
                            </select>
                        </label>
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400">Title</span>
                            <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="title" value="<?= (@set_value('title')!='')?@set_value('title'):@$services->stitle; ?>" required>
                        </label>
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400">Description</span>
                            <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="desc" value="<?= (@set_value('desc')!='')?@set_value('desc'):@$services->sdesc; ?>" required>
                        </label>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400 mb-1 block">Deliverables</span>
                                <textarea class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" id="editor1" name="deliverables" rows="5"><?= (@set_value('deliverables')!='')?@set_value('deliverables'):@$services->deliverables; ?></textarea>
                            </label>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400 mb-1 block">Add-ons</span>
                                <textarea class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" id="editor" name="addons" rows="5"><?= (@set_value('addons')!='')?@set_value('addons'):@$services->addons; ?></textarea>
                            </label>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="px-5 py-3 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>