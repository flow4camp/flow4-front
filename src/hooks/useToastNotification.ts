import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

function useToastNotification() {
  const toast = useToast();
  const [firstTime, setFirstTime] = useState("00:56");
  const [secondTime, setSecondTime] = useState("00:10");
  const [thirdTime, setThirdTime] = useState("02:19");
  useEffect(() => {
    const interval = setInterval(() => {
      // thirdTime과 현재 시간의 차이를 계산합니다.
      const currentTime = new Date();
      const thirdTimeDate = new Date(currentTime);

      const [hours, minutes] = thirdTime.split(":");
      thirdTimeDate.setHours(parseInt(hours, 10));
      thirdTimeDate.setMinutes(parseInt(minutes, 10));

      const firstTimeDate = new Date(currentTime);
      const [firstHours, firstMinutes] = firstTime.split(":");
      firstTimeDate.setHours(parseInt(firstHours, 10));
      firstTimeDate.setMinutes(parseInt(firstMinutes, 10));

      if (currentTime < firstTimeDate) {
        // 첫번째 시간보다 이전이라면, toast를 표시하지 않고 함수를 종료합니다.
        return;
      }

      // console.log(firstTimeData);
      console.log(currentTime);

      const timeDifference =
        (thirdTimeDate.getTime() - currentTime.getTime()) / (1000 * 60);
      const minutesRemaining = Math.floor(timeDifference);

      // toast 알림을 표시합니다.
      toast({
        title: `하차까지 ${minutesRemaining}분 남았습니다.`,
        status: "info",
        duration: 5000, // toast가 자동으로 닫히지 않도록 설정
        isClosable: true,
        position: "top",
      });
    }, 1 * 60 * 1000); // 1분을 밀리초로 표현한 값

    return () => clearInterval(interval); // 컴포넌트 언마운트 시에 interval 정리
  }, [toast, firstTime, thirdTime]);
}

export default useToastNotification;
