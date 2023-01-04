<template>
  <div class="main">
    <HeaderTitle title="Segment Detail"> </HeaderTitle>
    <MainContent>
      <div class="pt-5 flex flex-col md:flex-row">
        <div class="basis-full md:basis-1/2">
          <CardSegment
            segmentname="SGM-Aqua"
            description="Segment untuk playlist Aqua"
            :totalPlaylist="'3'"
            :totalSegment="'3'"
          />
        </div>
        <div class="bg-bgGray flex rounded-md basis-full py-4">
          <div class="basis-full py-3 px-8">
            <InputFloatingLabel label="Nama Segment" name="name" />
            <InputFloatingLabel label="Playlist" name="playlist" />
            <div class="flex justify-between">
              <InputFloatingLabel label="Mulai tayang" name="tayang" />
              <InputFloatingLabel label="Mulai akhir" name="akhir" />
            </div>
          </div>
          <div class="basis-2/3 border-l border-gray-500 px-6">
            <div class="flex flex-col h-full justify-center">
              <ul class="text-xs text-gray-500 list-disc space-y-2">
                <li>
                  Tentukan playlist yang akan dikaitkan dengan segmen yang
                  dibuat.
                </li>
                <li>
                  Setiap segment yang dibuat akan diputar sesuai dengan jam
                  tayang yang sudah ditentukan sesuai dengan jam mulai tayang
                  dan akhir tayang
                </li>
              </ul>
              <div class="flex bottom-0 pt-5 justify-center">
                <ButtonComponent vClass="bg-btnGray text-primary text-xs">
                  Simpan
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import CardSegment from "@/components/CardSegment.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import InputFloatingLabel from "@/components/InputFloatingLabel.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  components: {
    HeaderTitle,
    MainContent,
    CardSegment,
    InputFloatingLabel,
    ButtonComponent,
  },
};
</script>

<style lang="scss" scoped></style>
