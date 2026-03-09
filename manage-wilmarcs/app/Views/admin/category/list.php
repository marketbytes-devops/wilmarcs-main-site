            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex md:flex-row flex-col md:justify-between md:items-center md:space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300 capitalize"><?= @$pg; ?> Category</h4>
                        <div class="flex md:mt-0 mt-4 gap-4">
                            <a href="<?= base_url('backend/'.@$pg.'/category/add'); ?>" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">New</a>
                            <a href="<?= base_url('backend/'.@$pg); ?>" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                        </div>
                    </div>
                    <label class="block"><?= @session()->getFlashdata('msg'); ?></label>
                    <div class="w-full overflow-hidden rounded-lg shadow bg-white dark:bg-gray-700">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full whitespace-no-wrap" id="datatabletb">
                                <thead>
                                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th class="px-4 py-3">#</th>
                                        <th class="px-4 py-3">Action</th>
                                        <th class="px-4 py-3">Name</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-700">
                                    <?php if(!empty($category)) { foreach ($category as $key => $value) { ?>
                                    <tr class="text-gray-700 dark:text-gray-400">
                                        <td class="border-b text-sm dark:bg-gray-700" data-id="<?= @$value->cid; ?>"><?= @$key+1; ?></td>
                                        <td class="border-b text-sm dark:bg-gray-700">
                                            <div class="flex items-center space-x-4 text-sm">
                                                <a href="<?= base_url('backend/'.@$pg.'/category/add/'.@$value->cid); ?>" class="flex items-center justify-between p-1 text-sm font-medium leading-5 border text-blue-600 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray" aria-label="Edit"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></a>
                                                <a href="<?= base_url('backend/'.@$pg.'/category/del/'.@$value->cid); ?>" onclick="return confirm('Are you sure?')" class="ml-2-imp flex items-center justify-between p-1 text-sm font-medium leading-5 border text-red-600 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray" aria-label="Delete"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></a>
                                            </div>
                                        </td>
                                        <td class="border-b text-sm dark:bg-gray-700">
                                            <div class="flex gap-2 items-center">
                                                <?php if (@$value->cimg) { ?>
                                                    <img src="<?= base_url('/assets/uploads/'.@$value->cimg); ?>" class="inline w-14 h-14 object-cover border rounded-md" alt="image">
                                                <?php } ?>
                                                <div>
                                                    <div><?= @$value->cname; ?></div>
                                                    <small><?= @$value->cdesc; ?></small>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <?php } } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>